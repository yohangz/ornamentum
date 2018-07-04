import { Component } from '@angular/core';

import { data } from './disabling-usage.data';

@Component({
  selector: 'app-disabling-usage',
  templateUrl: './disabling-usage.component.html'
})
export class DisablingUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
