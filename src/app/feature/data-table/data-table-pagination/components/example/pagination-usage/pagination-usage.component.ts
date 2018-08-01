import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-pagination-usage',
  templateUrl: './pagination-usage.component.html'
})
export class PaginationUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
