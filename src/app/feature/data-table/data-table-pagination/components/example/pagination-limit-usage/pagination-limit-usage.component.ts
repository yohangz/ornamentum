import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-pagination-limit-usage',
  templateUrl: './pagination-limit-usage.component.html'
})
export class PaginationLimitUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData(0, 20);
  }
}
