import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-usage',
  templateUrl: './loading-spinner-usage.component.html'
})
export class LoadingSpinnerUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    setTimeout(() => {
      this.items = this.tableDataFetchService.getTableData();
    }, 3000);
  }
}
