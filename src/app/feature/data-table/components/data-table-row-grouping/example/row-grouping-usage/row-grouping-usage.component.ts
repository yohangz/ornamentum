import { Component } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './row-grouping-usage.data';

@Component({
  selector: 'app-row-grouping-usage',
  templateUrl: './row-grouping-usage.component.html'
})
export class RowGroupingUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }

  public onDynamicRowSpanExtract(row: DataTableRow<any>): number {
    if (row.item.links && row.item.links.length) {
      return row.item.links.length;
    }

    return 1;
  }

  public getUrlLinkValue(item: any, index: number, field: string) {
    return item.links && item.links[index] ? item.links[index][field] : '-';
  }
}
