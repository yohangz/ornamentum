import { Component } from '@angular/core';

import { DataTableSelectMode } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-data-binding-component',
  templateUrl: './data-table-data-binding.component.html',
  styleUrls: ['./data-table-data-binding.component.scss']
})
export class DataTableDataBindingComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public dataSource: Observable<any>;
  public items: any[];

  constructor() {
    this.dataSource = Observable.of(sampleData);
    this.items = sampleData;
  }
}
