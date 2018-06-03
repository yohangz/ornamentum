import { Component } from '@angular/core';

import { DataTableSelectMode, DataTableSortOrder } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-sorting-component',
  templateUrl: './data-table-sorting.component.html',
  styleUrls: ['./data-table-sorting.component.scss']
})
export class DataTableSortingComponent {
  public DataTableSortOrder = DataTableSortOrder;
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
