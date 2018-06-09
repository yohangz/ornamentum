import { Component } from '@angular/core';

import { VERSION } from '../../../../environments/version';

@Component({
  selector: 'app-main-menu',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  private packageVersion: string;

  constructor() {
    this.packageVersion = VERSION;
  }
}
