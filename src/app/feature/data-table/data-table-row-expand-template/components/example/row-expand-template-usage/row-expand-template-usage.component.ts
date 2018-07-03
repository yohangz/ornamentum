import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './row-expand-template-usage.data';

@Component({
  selector: 'app-row-expand-template-usage',
  templateUrl: './row-expand-template-usage.component.html'
})
export class RowExpandTemplateUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
