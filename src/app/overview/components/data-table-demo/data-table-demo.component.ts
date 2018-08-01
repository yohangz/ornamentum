import { Component, ElementRef, Input } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable, of } from 'rxjs/index';

import data from '../../../shared/data/sample-data';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html'
})
export class DataTableDemoComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public dataSource: Observable<any>;

  @Input()
  public parentElement: ElementRef;

  constructor() {
    this.dataSource = of(data);
  }
}
