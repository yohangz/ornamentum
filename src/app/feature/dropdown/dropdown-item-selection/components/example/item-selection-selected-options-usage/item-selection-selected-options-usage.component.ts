import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-selected-options-usage',
  templateUrl: './item-selection-selected-options-usage.component.html'
})
export class ItemSelectionSelectedOptionsUsageComponent {
  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
    this.selectedOptions = this.items.slice(0, 4);
  }
}
