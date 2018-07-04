import { Component } from '@angular/core';

import { data } from './filtering-usage.data';

@Component({
  selector: 'app-filtering-usage',
  templateUrl: './filtering-usage.component.html'
})
export class FilteringUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
