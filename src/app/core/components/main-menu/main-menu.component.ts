import { Component, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';

import { GlobalRefService } from 'ornamentum';

import { VERSION } from '../../../../environments/version';

import { NavigationService } from '../../services';

import { Theme } from '../../models/theme.enum';

@Component({
  selector: 'app-main-menu',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  public Theme = Theme;
  public packageVersion: string;

  @ViewChild('menuElement')
  public menuElement: ElementRef;

  @Input()
  public selectedTheme: Theme;

  @Output()
  public themeChange = new EventEmitter<string>();

  constructor(private containerResponsive: NavigationService,
              private globalRefService: GlobalRefService,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.packageVersion = VERSION;
  }

  public toggleNavigation(event: MouseEvent): void {
    event.stopPropagation();
    this.containerResponsive.navigationToggle.next();
  }

  public onThemeChange(theme: Theme): void {
    this.selectedTheme = theme;
    this.themeChange.emit(this.selectedTheme);
  }

  public isSelectedTheme(theme: Theme): boolean {
    return this.selectedTheme === theme;
  }
}
