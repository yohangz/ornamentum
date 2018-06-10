import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './single-row-selection-usage.data';

@Component({
  selector: 'app-single-row-selection-usage',
  templateUrl: './single-row-selection-usage.component.html'
})
export class SingleRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
