import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-responsive-conf-component',
  templateUrl: './data-table-responsive-conf.component.html',
  styleUrls: ['./data-table-responsive-conf.component.scss']
})
export class DataTableResponsiveConfComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
