import { Component } from '@angular/core';

import { data } from './data-limit-usage.data';

@Component({
  selector: 'app-data-limit-usage',
  templateUrl: './data-limit-usage.component.html'
})
export class DataLimitUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
