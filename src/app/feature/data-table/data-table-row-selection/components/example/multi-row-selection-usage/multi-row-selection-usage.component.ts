import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-multi-row-selection-usage',
  templateUrl: './multi-row-selection-usage.component.html'
})
export class MultiRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: DataTableExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
