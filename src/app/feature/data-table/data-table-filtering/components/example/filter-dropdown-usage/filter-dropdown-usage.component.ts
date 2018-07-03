import { Component } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './filter-dropdown-usage.data';

@Component({
  selector: 'app-filter-dropdown-usage',
  templateUrl: './filter-dropdown-usage.component.html'
})
export class FilterDropdownUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
