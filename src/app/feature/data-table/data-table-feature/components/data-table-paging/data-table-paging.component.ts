import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-paging-component',
  templateUrl: './data-table-paging.component.html',
  styleUrls: ['./data-table-paging.component.scss']
})
export class DataTablePagingComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
