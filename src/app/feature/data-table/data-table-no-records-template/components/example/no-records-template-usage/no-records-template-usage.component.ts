import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './no-records-template-usage.data';

@Component({
  selector: 'app-no-records-template-usage',
  templateUrl: './no-records-template-usage.component.html'
})
export class NoRecordsTemplateUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
