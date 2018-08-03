import { Component } from '@angular/core';

import { VERSION } from '../../../../environments/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public currentYear: Number;
  public packageVersion: string;

  constructor() {
    this.currentYear = (new Date()).getFullYear();
    this.packageVersion = VERSION;
  }
}
