import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-limit-component',
  templateUrl: './data-table-limit.component.html',
  styleUrls: ['./data-table-limit.component.scss']
})
export class DataTableLimitComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
