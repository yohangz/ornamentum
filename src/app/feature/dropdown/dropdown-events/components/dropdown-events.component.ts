import { Component } from '@angular/core';

import { eventsUsage } from './dropdown-events.list';

@Component({
  selector: 'app-dropdown-events-component',
  templateUrl: './dropdown-events.component.html',
  styleUrls: ['./dropdown-events.component.scss']
})
export class DropdownEventsComponent {
  public eventsUsage = eventsUsage;
}
