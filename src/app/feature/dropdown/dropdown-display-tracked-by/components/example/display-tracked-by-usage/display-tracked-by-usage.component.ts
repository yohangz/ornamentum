import { Component } from '@angular/core';

import { data } from './display-tracked-by-usage.data';

@Component({
  selector: 'app-display-tracked-by-usage',
  templateUrl: './display-tracked-by-usage.component.html'
})
export class DisplayTrackedByUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
