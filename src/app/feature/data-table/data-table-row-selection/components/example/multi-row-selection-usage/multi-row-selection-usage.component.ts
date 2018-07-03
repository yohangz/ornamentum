import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './multi-row-selection-usage.data';

@Component({
  selector: 'app-multi-row-selection-usage',
  templateUrl: './multi-row-selection-usage.component.html'
})
export class MultiRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
