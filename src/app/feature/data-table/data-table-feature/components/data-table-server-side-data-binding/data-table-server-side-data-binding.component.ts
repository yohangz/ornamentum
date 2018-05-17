import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

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
    this.dataSource = of(sampleData);
  }
}
