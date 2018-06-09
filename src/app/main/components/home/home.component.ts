import { Component } from '@angular/core';

import { VERSION } from '../../../../environments/version';

/**
 * Documentation home page view component.
 * @class HomeComponent
 */
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private currentYear: Number;
  private packageVersion: string;

  constructor() {
    this.currentYear = (new Date()).getFullYear();
    this.packageVersion = VERSION;
  }
}

