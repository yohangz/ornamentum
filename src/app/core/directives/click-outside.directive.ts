import { Directive, ElementRef, EventEmitter, HostListener, Output, Input } from '@angular/core';

/**
 * Click outside directive; Notify when clicked on a DOM element out of target DOM tree
 */
@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  /**
   * Click outside event emitter
   */
  @Output()
  public ngClickOutside = new EventEmitter<Event>();

  constructor(private el: ElementRef) {}

  /**
   * Track and compare the click event at the document root
   * @param event Click event
   */
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  public compareEvent(event: Event) {
    if (this.el.nativeElement && this.el.nativeElement.contains(event.target)) {
      return;
    }

    this.ngClickOutside.emit(event);
  }
}
