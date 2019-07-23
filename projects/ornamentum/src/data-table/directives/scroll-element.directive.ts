import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

import { Subscription, Subject } from 'rxjs';

import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';

/**
 * Scroll element directive; Set scroll position to target element
 */
@Directive({
  selector: '[ngScrollElement]'
})
export class ScrollElementDirective implements AfterViewInit, OnDestroy {
  private scrollPositionSubscription: Subscription;

  @Input()
  public ngScrollElement: Subject<DataTableScrollPoint>;

  constructor(private el: ElementRef) {}

  /**
   * After component initialize lifecycle event handler
   */
  public ngAfterViewInit(): void {
    this.scrollPositionSubscription = this.ngScrollElement.subscribe(value => {
      this.el.nativeElement.scrollLeft = value.scrollLeft;
    });
  }

  /**
   * Component destroy lifecycle event handler
   */
  public ngOnDestroy(): void {
    if (this.scrollPositionSubscription) {
      this.scrollPositionSubscription.unsubscribe();
    }
  }
}
