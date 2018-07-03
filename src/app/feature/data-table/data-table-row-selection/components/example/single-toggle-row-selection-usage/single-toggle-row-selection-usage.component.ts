import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './single-toggle-row-selection-usage.data';

@Component({
  selector: 'app-single-toggle-row-selection-usage',
  templateUrl: './single-toggle-row-selection-usage.component.html'
})
export class SingleToggleRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
