import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './column-resizable-usage.data';

@Component({
  selector: 'app-column-resizable-usage',
  templateUrl: './column-resizable-usage.component.html'
})
export class ColumnResizableUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
