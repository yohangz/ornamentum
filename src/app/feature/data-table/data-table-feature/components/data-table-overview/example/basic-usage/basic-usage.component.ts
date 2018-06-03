import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './basic-usage.data';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
