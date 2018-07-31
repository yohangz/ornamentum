import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-single-row-selection-usage',
  templateUrl: './single-row-selection-usage.component.html'
})
export class SingleRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
