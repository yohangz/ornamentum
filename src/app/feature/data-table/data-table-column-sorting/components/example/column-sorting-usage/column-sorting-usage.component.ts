import { Component } from '@angular/core';

import { DataTableSortOrder } from 'ornamentum';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-column-sorting-usage',
  templateUrl: './column-sorting-usage.component.html'
})
export class ColumnSortingUsageComponent {
  public DataTableSortOrder = DataTableSortOrder;

  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.getTableData();
  }
}
