import { Component } from '@angular/core';

import { data } from './basic-usage.data';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
