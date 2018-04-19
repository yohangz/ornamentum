import { Component } from '@angular/core';

import { DataTableSelectMode, DropdownMenuPosition } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-filtering-component',
  templateUrl: './data-table-filtering.component.html',
  styleUrls: ['./data-table-filtering.component.scss']
})
export class DataTableFilteringComponent {
  public MenuPosition = DropdownMenuPosition;
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}
