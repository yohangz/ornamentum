import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-show-option-select-checkbox-usage',
  templateUrl: './item-selection-show-option-select-checkbox-usage.component.html'
})
export class ItemSelectionShowOptionSelectCheckboxUsageComponent {
  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
