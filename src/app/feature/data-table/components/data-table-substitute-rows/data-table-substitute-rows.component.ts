import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-substitute-rows-component',
  templateUrl: './data-table-substitute-rows.component.html',
  styleUrls: ['./data-table-substitute-rows.component.scss']
})
export class DataTableSubstituteRowsComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
