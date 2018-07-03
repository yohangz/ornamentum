import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './filter-text-box-usage.data';

@Component({
  selector: 'app-filter-text-box-usage',
  templateUrl: './filter-text-box-usage.component.html'
})
export class FilterTextBoxUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
