import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-with-all-options-usage',
  templateUrl: './item-selection-with-all-options-usage.component.html'
})
export class ItemSelectionWithAllOptionsUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
    this.selectedOptions = this.items.slice(3, 7);
  }
}
