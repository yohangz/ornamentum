import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-selection-wrap-display-select-limit-usage',
  templateUrl: './item-selection-wrap-display-select-limit-usage.component.html'
})
export class ItemSelectionWrapDisplaySelectLimitUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
