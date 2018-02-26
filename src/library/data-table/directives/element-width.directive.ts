import {
  AfterViewInit,
  Directive, ElementRef, EventEmitter, Output
} from '@angular/core';

@Directive({
  selector: '[elementWidth]'
})
export class ElementWidthDirective implements AfterViewInit {
  @Output()
  public elementWidth = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this.elementWidth.emit(this.el.nativeElement.clientWidth);
  }
}
