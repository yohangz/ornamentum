import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Element focus directive; Set focus to target element on initialize
 */
@Directive({
  selector: '[ngFocus]'
})
export class FocusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  /**
   * On directive initialize
   */
  public ngOnInit(): void {
    this.el.nativeElement.focus();
  }
}
