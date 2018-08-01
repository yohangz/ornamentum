import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-without-limit-and-pagination-usage',
  templateUrl: './without-limit-and-pagination-usage.component.html'
})
export class WithoutLimitAndPaginationUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
