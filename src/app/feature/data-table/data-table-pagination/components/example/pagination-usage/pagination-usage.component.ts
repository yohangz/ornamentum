import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './pagination-usage.data';

@Component({
  selector: 'app-pagination-usage',
  templateUrl: './pagination-usage.component.html'
})
export class PaginationUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
