import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[scrollElement]'
})
export class ScrollElement {

  @Input()
  public set scrollElement(value: number) {
    this.el.nativeElement.scrollLeft = value;
  }

  constructor(private el: ElementRef) {
  }
}
