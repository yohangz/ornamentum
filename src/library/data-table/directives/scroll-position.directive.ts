import { Directive, ElementRef, EventEmitter, AfterViewInit, NgZone, Output, OnDestroy } from '@angular/core';

import { ScrollPoint } from '../models/data-table.model';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[scrollPosition]'
})
export class ScrollPositionDirective implements AfterViewInit, OnDestroy {
  private scrollEventSubscription: Subscription;

  @Output()
  public scrollPosition = new EventEmitter<ScrollPoint>();

  constructor(private el: ElementRef, private zone: NgZone) { }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.scrollEventSubscription = Observable.fromEvent(this.el.nativeElement, 'scroll')
        .subscribe(res => {
          this.zone.run(() => {
            this.scrollPosition.emit({
              scrollLeft: this.el.nativeElement.scrollLeft,
              scrollTop: this.el.nativeElement.scrollTop
            });
          });
        });
    });
  }

  public ngOnDestroy(): void {
    if (this.scrollEventSubscription) {
      this.scrollEventSubscription.unsubscribe();
    }
  }
}
