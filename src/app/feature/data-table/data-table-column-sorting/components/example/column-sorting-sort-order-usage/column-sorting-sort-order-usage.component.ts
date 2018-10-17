import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-column-sorting-sort-order-usage',
  templateUrl: './column-sorting-sort-order-usage.component.html'
})
export class ColumnSortingSortOrderUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData(0, 20);
  }
}
