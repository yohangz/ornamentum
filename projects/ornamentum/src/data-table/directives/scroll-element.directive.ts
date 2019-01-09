import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataTableScrollPositionService } from '../services/data-table-scroll-position.service';

/**
 * Scroll element directive; Set scroll position to target element
 */
@Directive({
  selector: '[ngScrollElement]'
})
export class ScrollElementDirective implements AfterViewInit, OnDestroy {
  private scrollPositionSubscription: Subscription;

  constructor(private el: ElementRef, private scrollPositionService: DataTableScrollPositionService) {
  }

  /**
   * After component initialize lifecycle event handler
   */
  public ngAfterViewInit(): void {
    this.scrollPositionSubscription = this.scrollPositionService.scrollPositionStream.subscribe((value) => {
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
