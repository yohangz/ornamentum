import { Component } from '@angular/core';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-usage',
  templateUrl: './loading-spinner-usage.component.html'
})
export class LoadingSpinnerUsageComponent {
  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    setTimeout(() => {
      this.items = this.tableDataFetchService.getTableData();
    }, 3000);
  }
}
