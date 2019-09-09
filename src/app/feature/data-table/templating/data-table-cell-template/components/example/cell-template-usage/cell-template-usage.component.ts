import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';
import { DataTableRow } from 'ornamentum';

@Component({
  selector: 'app-cell-template-usage',
  templateUrl: './cell-template-usage.component.html'
})
export class CellTemplateUsageComponent {
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
