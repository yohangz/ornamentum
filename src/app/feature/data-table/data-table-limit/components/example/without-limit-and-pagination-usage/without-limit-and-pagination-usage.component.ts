import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './without-limit-and-pagination-usage.data';

@Component({
  selector: 'app-without-limit-and-pagination-usage',
  templateUrl: './without-limit-and-pagination-usage.component.html'
})
export class WithoutLimitAndPaginationUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
