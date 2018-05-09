import { Component } from '@angular/core';

import { DataTableSelectMode } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-server-side-data-binding-component',
  templateUrl: './data-table-server-side-data-binding.component.html',
  styleUrls: ['./data-table-server-side-data-binding.component.scss']
})
export class DataTableServerSideDataBindingComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public dataSource: Observable<any>;

  constructor() {
    this.dataSource = Observable.of(sampleData);
  }
}
