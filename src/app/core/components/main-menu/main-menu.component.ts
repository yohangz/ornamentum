import { Component, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { fromEvent, Subscription } from 'rxjs/index';
import { debounceTime } from 'rxjs/operators';

import { GlobalRefService } from 'ornamentum';

import { VERSION } from '../../../../environments/version';

import { ContainerResponsiveService } from '../../services';

import { Theme } from '../../models/theme.enum';

@Component({
  selector: 'app-main-menu',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private resizeEventSubscription: Subscription;

  public Theme = Theme;
  public selectedTheme = Theme.dark;
  public packageVersion: string;

  @ViewChild('menuElement')
  public menuElement: ElementRef;

  @Output()
  public themeChange = new EventEmitter<string>();

  constructor(private containerResponsive: ContainerResponsiveService,
              private globalRefService: GlobalRefService,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.packageVersion = VERSION;
  }

  private emitContainerHeight(): void {
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
    if (isPlatformBrowser(this.platformId)) {
      this.resizeEventSubscription = fromEvent(this.globalRefService.window, 'resize')
        .pipe(
          debounceTime(66)
        )
        .subscribe(() => {
          this.emitContainerHeight();
        });

      this.emitContainerHeight();
    }

    this.themeChange.emit(this.selectedTheme);
  }

  public ngOnDestroy(): void {
    if (this.resizeEventSubscription) {
      this.resizeEventSubscription.unsubscribe();
    }
  }

  public onThemeChange(theme: Theme): void {
    this.selectedTheme = theme;
    this.themeChange.emit(this.selectedTheme);
  }

  public isSelectedTheme(theme: Theme): boolean {
    return this.selectedTheme === theme;
  }
}
