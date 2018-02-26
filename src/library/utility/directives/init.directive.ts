import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[initStream]'
})
export class InitDirective implements OnInit {

  @Output()
  public init = new EventEmitter();

  public ngOnInit(): void {
    this.init.emit();
  }
}
