import { Component } from '@angular/core';

import { DataTableSelectMode, DataTableSortOrder } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-resizable-component',
  templateUrl: './data-table-resizable.component.html',
  styleUrls: ['./data-table-resizable.component.scss']
})
export class DataTableResizableComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}
