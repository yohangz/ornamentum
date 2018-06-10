import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { data } from './multi-item-selection-usage.data';

@Component({
  selector: 'app-multi-item-selection-usage',
  templateUrl: './multi-item-selection-usage.component.html'
})
export class MultiItemSelectionUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: any[];

  constructor() {
    this.items = data;
  }
}
