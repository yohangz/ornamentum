import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { GlobalRefService } from 'ornamentum';

import { ContainerResponsiveService } from '../../services';

import { VERSION } from '../../../../environments/version';

@Component({
  selector: 'app-main-menu',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private resizeEventSubscription: Subscription;

  public packageVersion: string;
  public isMobileMode = false;

  @ViewChild('menuElement')
  public menuElement: ElementRef;

  constructor(private containerResponsive: ContainerResponsiveService, private globalRefService: GlobalRefService) {
    this.packageVersion = VERSION;
  }

  private emitContainerHeight(): void {
    this.isMobileMode = this.containerResponsive.isMobileMode(this.globalRefService.window.innerWidth);
    this.containerResponsive.containerSize.next({
      containerHeight: this.globalRefService.window.innerHeight - this.menuElement.nativeElement.offsetHeight,
      containerWidth: this.globalRefService.window.innerWidth,
      windowHeight: this.globalRefService.window.innerHeight,
      windowWidth: this.globalRefService.window.innerWidth
    });
  }

  public toggleNavigation(event: MouseEvent): void {
    event.stopPropagation();
    this.containerResponsive.navigationToggle.next();
  }

  public ngOnInit(): void {
    this.resizeEventSubscription = fromEvent(this.globalRefService.window, 'resize')
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
