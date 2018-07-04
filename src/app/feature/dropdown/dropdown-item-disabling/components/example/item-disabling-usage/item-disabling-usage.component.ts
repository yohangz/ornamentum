import { Component } from '@angular/core';

import { data } from './item-disabling-usage.data';

@Component({
  selector: 'app-item-disabling-usage',
  templateUrl: './item-disabling-usage.component.html'
})
export class ItemDisablingUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
