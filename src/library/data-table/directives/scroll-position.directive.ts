import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

import { ScrollPoint } from '../models/data-table.model';

@Directive({
  selector: '[scrollPosition]'
})
export class ScrollPositionDirective {
  @Output()
  public scrollPosition = new EventEmitter<ScrollPoint>();

  constructor(private el: ElementRef) {
  }

  @HostListener('scroll')
  public onScroll(): void {
    this.scrollPosition.emit({
      scrollLeft: this.el.nativeElement.scrollLeft,
      scrollTop: this.el.nativeElement.scrollTop
    });
  }
}
