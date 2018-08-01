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
    this.items = this.dataFetchService.dropDownData;

    this.selectedOptions = [
      {
        key: 17,
        productType: 'Cooking Gear'
      },
      {
        key: 22,
        productType: 'Sleeping Bag'
      },
      {
        key: 32,
        productType: 'Safety'
      },
      {
        key: 37,
        productType: 'Climbing Accessories'
      }
    ];
  }
}
