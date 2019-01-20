import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

/**
 * Element width directive; Emit target element width after view init
 */
@Directive({
  selector: '[ngElementWidth]'
})
export class ElementWidthDirective implements AfterViewInit {
  @Output()
  public ngElementWidth = new EventEmitter();

  constructor(private el: ElementRef) {}

  /**
   * After component view initialize lifecycle event handler
   */
  public ngAfterViewInit(): void {
    this.ngElementWidth.emit(this.el.nativeElement.clientWidth);
  }
}
