import {
  Directive, ElementRef, EventEmitter, OnInit, Output
} from '@angular/core';

@Directive({
  selector: '[elementWidth]'
})
export class ElementWidthDirective implements OnInit {

  @Output()
  public elementWidth = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.elementWidth.emit(this.el.nativeElement.clientWidth);
    });
  }

  constructor(private el: ElementRef) {
  }
}
