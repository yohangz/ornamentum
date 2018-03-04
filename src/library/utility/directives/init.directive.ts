import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[init]'
})
export class InitDirective implements OnInit {

  @Output()
  public init = new EventEmitter();

  public ngOnInit(): void {
    this.init.emit();
  }
}
