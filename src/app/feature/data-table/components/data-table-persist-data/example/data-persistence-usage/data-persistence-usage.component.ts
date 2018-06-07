import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './data-persistence-usage.data';

@Component({
  selector: 'app-data-persistence-usage',
  templateUrl: './data-persistence-usage.component.html'
})
export class DataPersistenceUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
