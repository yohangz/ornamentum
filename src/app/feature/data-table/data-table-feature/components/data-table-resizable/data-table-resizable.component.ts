import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-resizable-component',
  templateUrl: './data-table-resizable.component.html',
  styleUrls: ['./data-table-resizable.component.scss']
})
export class DataTableResizableComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(sampleData);
  }
}
