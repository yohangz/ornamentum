import { Component } from '@angular/core';

import { DataTableSelectMode } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-persist-data-component',
  templateUrl: './data-table-persist-data.component.html',
  styleUrls: ['./data-table-persist-data.component.scss']
})
export class DataTablePersistDataComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}
