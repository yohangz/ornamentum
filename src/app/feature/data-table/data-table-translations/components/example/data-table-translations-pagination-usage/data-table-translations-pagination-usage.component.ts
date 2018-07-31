import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-data-table-translations-pagination-usage',
  templateUrl: './data-table-translations-pagination-usage.component.html'
})
export class DataTableTranslationsPaginationUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    paginationLimit: 'This is the message for paginationLimit',
    paginationRange: 'This is the message for paginationRange',
    noDataMessageBody: 'Customized No Data Message Body',
    noDataMessageHeader: 'Customized No Data Message Header'
  };

  public paginationItems: DataTableExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.paginationItems = this.tableDataFetchService.getTableData();
  }
}
