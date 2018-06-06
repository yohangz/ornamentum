import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-pagination-component',
  templateUrl: './data-table-pagination.component.html',
  styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
