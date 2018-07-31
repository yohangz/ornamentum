import { Component, ElementRef, Input } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-table-header-details-usage',
  templateUrl: './table-header-details-usage.component.html'
})
export class TableHeaderDetailsUsageComponent {
  public items: DataTableExampleDataModel[];

  @Input()
  public parentElement: ElementRef;

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
