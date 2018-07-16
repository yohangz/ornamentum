import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Theme } from '../../../core/models/theme.enum';

/**
 * Component class for showing main view.
 * @class MainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent {
  public themeCssClass: string = Theme.dark;

  constructor(private router: Router) {
  }

  public getState(): string {
    return this.router.url;
  }

  public onThemeChange(cssClass: string): void {
    this.themeCssClass = cssClass;
  }
}

