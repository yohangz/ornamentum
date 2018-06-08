import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './row-selection-usage.data';

@Component({
  selector: 'app-row-selection-usage',
  templateUrl: './row-selection-usage.component.html'
})
export class RowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
