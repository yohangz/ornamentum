import { Component, ElementRef, Input } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-table-header-details-usage',
  templateUrl: './table-header-details-usage.component.html'
})
export class TableHeaderDetailsUsageComponent {
  public items: DataTableExampleDataModel[];

  @Input()
  public parentElement: ElementRef;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.getTableData();
  }
}
