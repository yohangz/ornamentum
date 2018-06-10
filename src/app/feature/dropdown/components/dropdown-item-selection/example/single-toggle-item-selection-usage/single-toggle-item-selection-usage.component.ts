import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { data } from './single-toggle-item-selection-usage.data';

@Component({
  selector: 'app-single-toggle-item-selection-usage',
  templateUrl: './single-toggle-item-selection-usage.component.html'
})
export class SingleToggleItemSelectionUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: any[];

  constructor() {
    this.items = data;
  }
}
