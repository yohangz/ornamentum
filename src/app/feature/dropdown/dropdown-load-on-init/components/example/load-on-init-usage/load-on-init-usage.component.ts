import { Component } from '@angular/core';

import { data } from './load-on-init-usage.data';

@Component({
  selector: 'app-load-on-init-usage',
  templateUrl: './load-on-init-usage.component.html'
})
export class LoadOnInitUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
