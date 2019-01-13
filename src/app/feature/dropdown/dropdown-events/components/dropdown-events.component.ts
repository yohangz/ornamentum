import { Component } from '@angular/core';

import {
  eventsUsage,
  eventsDataBoundUsage,
  eventsInitUsage,
  eventsSelectChangeUsage,
  eventsTriggerSelectChangeOnFirstOptionSelectUsage,
  eventsTriggerSelectChangeOnInitUsage,
  eventsTriggerSelectChangeOnModelUpdateUsage
} from './dropdown-events.list';

@Component({
  selector: 'app-dropdown-events-component',
  templateUrl: './dropdown-events.component.html',
  styleUrls: ['./dropdown-events.component.scss']
})
export class DropdownEventsComponent {
  public eventsUsage = eventsUsage;
  public eventsDataBoundUsage = eventsDataBoundUsage;
  public eventsInitUsage = eventsInitUsage;
  public eventsSelectChangeUsage = eventsSelectChangeUsage;
  public eventsTriggerSelectChangeOnFirstOptionSelectUsage = eventsTriggerSelectChangeOnFirstOptionSelectUsage;
  public eventsTriggerSelectChangeOnInitUsage = eventsTriggerSelectChangeOnInitUsage;
  public eventsTriggerSelectChangeOnModelUpdateUsage = eventsTriggerSelectChangeOnModelUpdateUsage;
}
