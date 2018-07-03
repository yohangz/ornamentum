import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './pagination-without-limit-usage.data';

@Component({
  selector: 'app-pagination-without-limit-usage',
  templateUrl: './pagination-without-limit-usage.component.html'
})
export class PaginationWithoutLimitUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
