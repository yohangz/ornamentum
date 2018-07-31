import { Component } from '@angular/core';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-column-resizable-usage',
  templateUrl: './column-resizable-usage.component.html'
})
export class ColumnResizableUsageComponent {
  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
