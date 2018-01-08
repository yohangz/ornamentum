import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[scrollElement]'
})
export class ScrollElementDirective implements AfterViewInit, OnDestroy {
  private scrollPositionSubscription: Subscription;

  @Input()
  public scrollPositionStream: Observable<any>;

  public ngAfterViewInit(): void {
    this.scrollPositionSubscription = this.scrollPositionStream.subscribe((value) => {
      this.el.nativeElement.scrollLeft = value.scrollLeft;
    });
  }

  public ngOnDestroy(): void {
    if (this.scrollPositionSubscription) {
      this.scrollPositionSubscription.unsubscribe();
    }
  }

  constructor(private el: ElementRef) {
  }
}
