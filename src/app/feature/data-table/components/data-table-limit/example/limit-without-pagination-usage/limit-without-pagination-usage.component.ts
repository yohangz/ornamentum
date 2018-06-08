import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './limit-without-pagination-usage.data';

@Component({
  selector: 'app-limit-without-pagination-usage',
  templateUrl: './limit-without-pagination-usage.component.html'
})
export class LimitWithoutPaginationUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
