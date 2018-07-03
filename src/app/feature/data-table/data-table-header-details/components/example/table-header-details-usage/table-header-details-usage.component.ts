import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './table-header-details-usage.data';

@Component({
  selector: 'app-table-header-details-usage',
  templateUrl: './table-header-details-usage.component.html'
})
export class TableHeaderDetailsUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
