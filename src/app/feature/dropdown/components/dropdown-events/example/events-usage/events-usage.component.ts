import { Component } from '@angular/core';

import { data } from './events-usage.data';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
