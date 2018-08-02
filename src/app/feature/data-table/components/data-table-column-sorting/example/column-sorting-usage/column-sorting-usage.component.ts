import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { DataTableSortOrder } from 'ornamentum';

import { data } from './column-sorting-usage.data';

@Component({
  selector: 'app-column-sorting-usage',
  templateUrl: './column-sorting-usage.component.html'
})
export class ColumnSortingUsageComponent {
  public DataTableSortOrder = DataTableSortOrder;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
