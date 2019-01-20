import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-column-sorting-multi-column-sortable-usage',
  templateUrl: './column-sorting-multi-column-sortable-usage.component.html'
})
export class ColumnSortingMultiColumnSortableUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData(0, 20);
  }
}
