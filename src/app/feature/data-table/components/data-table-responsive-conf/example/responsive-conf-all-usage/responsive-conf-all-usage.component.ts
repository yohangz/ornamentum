import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './responsive-conf-all-usage.data';

@Component({
  selector: 'app-responsive-conf-all-usage',
  templateUrl: './responsive-conf-all-usage.component.html'
})
export class ResponsiveConfAllUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
