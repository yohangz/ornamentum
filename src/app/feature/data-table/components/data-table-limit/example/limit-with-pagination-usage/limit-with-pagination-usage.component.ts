import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './limit-with-pagination-usage.data';

@Component({
  selector: 'app-limit-with-pagination-usage',
  templateUrl: './limit-with-pagination-usage.component.html'
})
export class LimitWithPaginationUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
