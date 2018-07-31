import { Component } from '@angular/core';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-pagination-usage',
  templateUrl: './pagination-usage.component.html'
})
export class PaginationUsageComponent {
  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
