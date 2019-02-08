import { Component } from '@angular/core';

import {
  eventsUsage,
  dataBoundUsage,
  initUsage,
  selectChangeUsage,
  triggerSelectChangeOnFirstOptionSelectUsage,
  triggerSelectChangeOnInitUsage,
  triggerSelectChangeOnModelUpdateUsage
} from './dropdown-events.list';

@Component({
  selector: 'app-dropdown-events-component',
  templateUrl: './dropdown-events.component.html',
  styleUrls: ['./dropdown-events.component.scss']
})
export class DropdownEventsComponent {
  public eventsUsage = eventsUsage;
  public dataBoundUsage = dataBoundUsage;
  public initUsage = initUsage;
  public selectChangeUsage = selectChangeUsage;
  public triggerSelectChangeOnFirstOptionSelectUsage = triggerSelectChangeOnFirstOptionSelectUsage;
  public triggerSelectChangeOnInitUsage = triggerSelectChangeOnInitUsage;
  public triggerSelectChangeOnModelUpdateUsage = triggerSelectChangeOnModelUpdateUsage;
}
