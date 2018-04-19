import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataTableSelectMode } from '../../../../../../library/data-table/models/data-table-select-mode.model';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}