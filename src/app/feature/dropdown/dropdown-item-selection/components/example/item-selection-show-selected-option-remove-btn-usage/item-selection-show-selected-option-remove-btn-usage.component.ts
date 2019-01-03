import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-show-selected-option-remove-btn-usage',
  templateUrl: './item-selection-show-selected-option-remove-btn-usage.component.html'
})
export class ItemSelectionShowSelectedOptionRemoveBtnUsageComponent {
  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
