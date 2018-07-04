import { Component } from '@angular/core';

import { data } from './item-grouping-usage.data';

@Component({
  selector: 'app-item-grouping-usage',
  templateUrl: './item-grouping-usage.component.html'
})
export class ItemGroupingUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
