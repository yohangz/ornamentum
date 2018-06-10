import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs/index';
import { debounceTime } from 'rxjs/operators';

import { VERSION } from '../../../../environments/version';

import { ContainerResponsiveService } from '../../services';

@Component({
  selector: 'app-main-menu',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private resizeEventSubscription: Subscription;

  public packageVersion: string;

  @ViewChild('menuElement')
  public menuElement: ElementRef;

  constructor(private containerResponsive: ContainerResponsiveService) {
    this.packageVersion = VERSION;
  }

  private emitContainerHeight(): void {
    this.containerResponsive.containerSize.next({
      containerHeight: window.innerHeight - this.menuElement.nativeElement.offsetHeight,
      containerWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  public toggleNavigation(): void {
    this.containerResponsive.navigationToggle.next();
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
