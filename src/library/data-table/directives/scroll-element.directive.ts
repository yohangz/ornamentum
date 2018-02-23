import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DataTableScrollPositionService } from '../services/data-table-scroll-position.service';

@Directive({
  selector: '[scrollElement]'
})
export class ScrollElementDirective implements AfterViewInit, OnDestroy {
  private scrollPositionSubscription: Subscription;

  constructor(private el: ElementRef, private scrollPositionService: DataTableScrollPositionService) {
  }

  public ngAfterViewInit(): void {
    this.scrollPositionSubscription = this.scrollPositionService.scrollPositionStream.subscribe((value) => {
      this.el.nativeElement.scrollLeft = value.scrollLeft;
    });
  }

  public ngOnDestroy(): void {
    if (this.scrollPositionSubscription) {
      this.scrollPositionSubscription.unsubscribe();
    }
  }
}
