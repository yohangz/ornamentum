import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-table-header-details-show-column-selector-usage',
  templateUrl: './table-header-details-show-column-selector-usage.component.html'
})
export class TableHeaderDetailsShowColumnSelectorUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
