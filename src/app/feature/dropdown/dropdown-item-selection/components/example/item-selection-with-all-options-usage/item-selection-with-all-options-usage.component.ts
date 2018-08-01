import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-with-all-options-usage',
  templateUrl: './item-selection-with-all-options-usage.component.html'
})
export class ItemSelectionWithAllOptionsUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: DropdownExampleDataModel[];
  public selectedOptions: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.getDropDownData();

    this.selectedOptions = [
      {
        key: 17,
        product_type: 'Cooking Gear'
      },
      {
        key: 22,
        product_type: 'Sleeping Bag'
      },
      {
        key: 32,
        product_type: 'Safety'
      },
      {
        key: 37,
        product_type: 'Climbing Accessories'
      }
    ];
  }
}
