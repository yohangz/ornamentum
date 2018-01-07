import { AfterViewInit, Directive, ElementRef, EventEmitter, NgZone, Output } from '@angular/core';

import {ScrollPoint} from '../models/data-table.model';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[scrollPosition]'
})
export class ScrollPosition implements AfterViewInit {
  @Output()
  public scrollPosition = new EventEmitter<ScrollPoint>();

  constructor(private el: ElementRef, private zone: NgZone) { }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      Observable.fromEvent(this.el.nativeElement, 'scroll')
        .subscribe(res => {
          this.zone.run(() => {
            this.scrollPosition.emit({
              scrollLeft: this.el.nativeElement.scrollLeft,
              scrollTop: this.el.nativeElement.scrollTop
            });
          });
        });
    });
  }
}
