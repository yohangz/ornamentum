import { Component } from '@angular/core';

import { DataTableSelectMode, DataTableSortOrder } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-sorting-component',
  templateUrl: './data-table-sorting.component.html',
  styleUrls: ['./data-table-sorting.component.scss']
})
export class DataTableSortingComponent {
  public SortOrder = DataTableSortOrder;
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}
