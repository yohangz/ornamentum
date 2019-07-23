import { Directive, ElementRef, AfterViewInit, NgZone, OnDestroy, Input } from '@angular/core';

import { Subscription, fromEvent, Subject } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';

import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';

/**
 * Scroll position directive; Track current scroll position of target element
 */
@Directive({
  selector: '[ngScrollPosition]'
})
export class ScrollPositionDirective implements AfterViewInit, OnDestroy {
  private scrollEventSubscription: Subscription;

  @Input()
  public ngScrollPosition: Subject<DataTableScrollPoint>;

  constructor(private el: ElementRef, private zone: NgZone) {}

  /**
   * After component initialize lifecycle event handler
   */
  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.scrollEventSubscription = fromEvent(this.el.nativeElement, 'scroll')
        .pipe(
          map(() => {
            return {
              scrollLeft: this.el.nativeElement.scrollLeft,
              scrollTop: this.el.nativeElement.scrollTop
            };
          }),
          pairwise(),
          map((pair: DataTableScrollPoint[]) => {
            const [ previous, current ] = pair;

            return {
              scrollLeft: current.scrollLeft,
              scrollTop: current.scrollTop,
              isHorizontal: previous.scrollLeft !== current.scrollLeft,
              isVertical: previous.scrollTop !== current.scrollTop
            };
          })
        )
        .subscribe((pos: DataTableScrollPoint) => {
          this.ngScrollPosition.next(pos);
        });
    });
  }

  /**
   * Component destroy lifecycle event handler
   */
  public ngOnDestroy(): void {
    if (this.scrollEventSubscription) {
      this.scrollEventSubscription.unsubscribe();
    }

    this.ngScrollPosition.complete();
  }
}
