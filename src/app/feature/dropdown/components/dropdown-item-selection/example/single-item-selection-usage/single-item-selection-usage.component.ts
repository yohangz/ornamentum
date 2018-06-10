import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { data } from './single-item-selection-usage.data';

@Component({
  selector: 'app-single-item-selection-usage',
  templateUrl: './single-item-selection-usage.component.html'
})
export class SingleItemSelectionUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: any[];

  constructor() {
    this.items = data;
  }
}
