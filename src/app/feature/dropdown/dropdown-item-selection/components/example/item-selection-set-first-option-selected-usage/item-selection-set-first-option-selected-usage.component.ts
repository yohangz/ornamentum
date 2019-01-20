import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-set-first-option-selected-usage',
  templateUrl: './item-selection-set-first-option-selected-usage.component.html'
})
export class ItemSelectionSetFirstOptionSelectedUsageComponent {
  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
