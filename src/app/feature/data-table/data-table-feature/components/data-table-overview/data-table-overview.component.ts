import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';
import { demoSnippets } from './data-table-overview.list';

@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public DataTableSelectMode = DataTableSelectMode;
  public items: Observable<any>;

  public demoSnippets = demoSnippets;

  constructor() {
    this.items = of(sampleData);
  }
}
