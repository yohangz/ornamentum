import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { data } from './item-selection-with-all-options-usage.data';

@Component({
  selector: 'app-item-selection-with-all-options-usage',
  templateUrl: './item-selection-with-all-options-usage.component.html'
})
export class ItemSelectionWithAllOptionsUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: any[];
  public selectedOptions: any[];

  constructor() {
    this.items = data;
    this.selectedOptions = [
      {
        key: 2,
        value: 'test1'
      },
      {
        key: 4,
        value: 'test3'
      },
      {
        key: 5,
        value: 'test4'
      }
    ];
  }
}
