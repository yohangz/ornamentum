import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './without-substitute-rows-usage.data';

@Component({
  selector: 'app-without-substitute-rows-usage',
  templateUrl: './without-substitute-rows-usage.component.html'
})
export class WithoutSubstituteRowsUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
