import {
  Directive, ElementRef, EventEmitter, OnInit, Output
} from '@angular/core';

@Directive({
  selector: '[elementWidth]'
})
export class ElementWidth implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.elementWidth.emit(this.el.nativeElement.clientWidth);
    });
  }

  @Output()
  public elementWidth = new EventEmitter();

  constructor(private el: ElementRef) {
  }
}
