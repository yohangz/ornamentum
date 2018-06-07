import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './responsive-conf-without-width-height-usage.data';

@Component({
  selector: 'app-responsive-conf-without-width-height-usage',
  templateUrl: './responsive-conf-without-width-height-usage.component.html'
})
export class ResponsiveConfWithoutWidthHeightUsageComponent {
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
