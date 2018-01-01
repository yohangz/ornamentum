import {
  Directive, EventEmitter, Output
} from '@angular/core';

/**
 * Click outside directive.
 * Notify when outside of the self DOM element is clicked.
 */
@Directive({
  selector: '[clickOutside]',
  host: {
    '(click)': 'trackEvent($event)',
    '(document: click)': 'compareEvent($event)'
  }
})
export class ClickOutsideDirective {
  private localEvent: Event = null;

  /**
   * Click outside event emitter.
   * @type {EventEmitter<Event>}
   */
  @Output()
  public clickOutside = new EventEmitter<Event>();

  /**
   * Track and compare the click event at the document root.
   * @param event Click event
   */
  public compareEvent(event: Event) {
    // If the event at the document root is the same reference as the
    // event at the target, it means that the event originated from
    // within the target and bubbled all the way to the root. As such,
    // if the event at the document root does NOT MATCH the last known
    // event at the target, the event must have originated from
    // outside of the target.
    if (event !== this.localEvent) {
      this.clickOutside.emit(event);
    }

    this.localEvent = null;
  }

  /**
   * Track the click event on the bound target.
   * @param {Event} event
   */
  public trackEvent(event: Event) {
    // When the user clicks inside the bound target, we need to start
    // tracking the event as it bubbles up the DOM tree. This way,
    // when a click event hits the document root, we can determine if
    // the event originated from within the target.
    this.localEvent = event;
  }
}
