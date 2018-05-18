import {
  AfterViewInit,
  Directive, ElementRef, EventEmitter, Output
} from '@angular/core';

@Directive({
  selector: '[ngElementWidth]'
})
export class ElementWidthDirective implements AfterViewInit {
  @Output()
  public ngElementWidth = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this.ngElementWidth.emit(this.el.nativeElement.clientWidth);
  }
}
