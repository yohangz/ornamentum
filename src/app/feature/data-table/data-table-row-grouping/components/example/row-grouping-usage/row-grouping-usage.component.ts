import { Component } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-row-grouping-usage',
  templateUrl: './row-grouping-usage.component.html'
})
export class RowGroupingUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onDynamicRowSpanExtract(row: DataTableRow<ExampleData>): number {
    if (row.item.availableStores && row.item.availableStores.length) {
      return row.item.availableStores.length;
    }

    return 1;
  }

  public getStoreName(item: ExampleData, index: number, field: string) {
    return item.availableStores && item.availableStores[index] ? item.availableStores[index][field] : '-';
  }
}
