import { AfterContentChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements AfterContentChecked {
  constructor(private el: ElementRef) {
  }

  public ngAfterContentChecked(): void {
    this.el.nativeElement.focus();
  }
}
