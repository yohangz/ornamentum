import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './with-substitute-rows-usage.data';

@Component({
  selector: 'app-with-substitute-rows-usage',
  templateUrl: './with-substitute-rows-usage.component.html'
})
export class WithSubstituteRowsUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
