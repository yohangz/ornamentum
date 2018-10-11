import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-column-sorting-sort-field-usage',
  templateUrl: './column-sorting-sort-field-usage.html'
})
export class ColumnSortingSortFieldUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData(0, 20);
  }
}
