import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-selected-option-usage',
  templateUrl: './item-selection-selected-option-usage.component.html'
})
export class ItemSelectionSelectedOptionUsageComponent {
  public items: ExampleData[];
  public selectedOption: ExampleData;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
    this.selectedOption = this.items[1];
  }
}
