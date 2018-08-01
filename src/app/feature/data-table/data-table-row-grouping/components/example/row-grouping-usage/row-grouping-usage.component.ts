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
    this.items = this.dataFetchService.fetchData();
  }

  public onDynamicRowSpanExtract(row: DataTableRow<any>): void {
    // if (row.item.links && row.item.links.length) {
    //   return row.item.links.length;
    // }
    //
    // return 1;
  }

  // public getUrlLinkValue(item: any, index: number, field: string) {
  //   return item.links && item.links[index] ? item.links[index][field] : '-';
  // }
}
