import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './cell-template-usage.data';

@Component({
  selector: 'app-cell-template-usage',
  templateUrl: './cell-template-usage.component.html'
})
export class CellTemplateUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
