import { Component } from '@angular/core';

import { eventsUsage } from './data-table-events.list';

@Component({
  selector: 'app-data-table-events-component',
  templateUrl: './data-table-events.component.html',
  styleUrls: ['./data-table-events.component.scss']
})
export class DataTableEventsComponent {
  public eventsUsage = eventsUsage;
}
