import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs/index';
import { debounceTime } from 'rxjs/operators';
import { ContainerResponsiveService } from '../../services/container-responsive.service';

/**
 * Component class for showing main view.
 * @class MainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {
  private resizeEventSubscription: Subscription;
  public contentHeight: number;

  @ViewChild('headerElement')
  public headerElement: ElementRef;

  constructor(private containerResponsive: ContainerResponsiveService) {
  }

  private emitContainerHeight(): void {
    const newHeight = window.innerHeight - this.headerElement.nativeElement.offsetHeight;
    if (newHeight !== this.contentHeight) {
      this.contentHeight = newHeight;
      this.containerResponsive.containerSize.next(newHeight);
    }
  }

  public ngOnInit(): void {
    this.resizeEventSubscription = fromEvent(window, 'resize')
      .pipe(
        debounceTime(66)
      )
      .subscribe(() => {
        this.emitContainerHeight();
      });

    this.emitContainerHeight();
  }

  public ngOnDestroy(): void {
    this.resizeEventSubscription.unsubscribe();
  }
}

