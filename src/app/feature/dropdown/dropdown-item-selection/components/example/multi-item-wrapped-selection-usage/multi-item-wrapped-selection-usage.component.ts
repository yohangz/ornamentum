import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { data } from './multi-item-wrapped-selection-usage.data';

@Component({
  selector: 'app-multi-item-wrapped-selection-usage',
  templateUrl: './multi-item-wrapped-selection-usage.component.html'
})
export class MultiItemWrappedSelectionUsageComponent {
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
