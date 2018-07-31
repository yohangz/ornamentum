import { Component } from '@angular/core';

import { DataTableSortOrder } from 'ornamentum';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-column-sorting-usage',
  templateUrl: './column-sorting-usage.component.html'
})
export class ColumnSortingUsageComponent {
  public DataTableSortOrder = DataTableSortOrder;

  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
