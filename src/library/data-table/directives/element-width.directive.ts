import {
  AfterViewInit,
  Directive, ElementRef, EventEmitter, OnInit, Output
} from '@angular/core';

@Directive({
  selector: '[elementWidth]'
})
export class ElementWidth implements AfterViewInit {
  @Output()
  public elementWidth = new EventEmitter();

  public ngAfterViewInit(): void {
    this.elementWidth.emit(this.el.nativeElement.clientWidth);
  }

  constructor(private el: ElementRef) {
  }
}
