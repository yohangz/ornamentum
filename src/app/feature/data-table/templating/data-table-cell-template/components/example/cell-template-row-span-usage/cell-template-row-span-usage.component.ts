import { Component } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';


@Component({
  selector: 'app-cell-template-row-span-usage',
  templateUrl: './cell-template-row-span-usage.component.html'
})
export class CellTemplateRowSpanUsageComponent {
  public items: ExampleData[];


  constructor(private dataFetchService: DataFetchService) {
    this.items = dataFetchService.fetchStaticData();
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
