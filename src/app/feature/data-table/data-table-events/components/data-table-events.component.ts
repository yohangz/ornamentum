import { Component } from '@angular/core';

import {
  demoSnippet,
  eventsUsage,
  eventsInitUsage,
  eventsAllRowSelectChangeUsage,
  eventsRowBindUsage,
  eventsRowSelectChangeUsage,
  eventsCellBindUsage,
  eventsCellClickUsage,
  eventsColumnBindUsage,
  eventsDataBoundUsage,
  eventsHeaderClickUsage,
  eventsRowClickUsage,
  eventsRowDoubleClickUsage
} from './data-table-events.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-events-component',
  templateUrl: './data-table-events.component.html',
  styleUrls: ['./data-table-events.component.scss']
})
export class DataTableEventsComponent {
  public FileType = FileType;

  public eventsUsage = eventsUsage;
  public eventsInitUsage = eventsInitUsage;
  public eventsAllRowSelectChangeUsage = eventsAllRowSelectChangeUsage;
  public eventsRowBindUsage = eventsRowBindUsage;
  public eventsRowSelectChangeUsage = eventsRowSelectChangeUsage;
  public eventsCellBindUsage = eventsCellBindUsage;
  public eventsCellClickUsage = eventsCellClickUsage;
  public eventsColumnBindUsage = eventsColumnBindUsage;
  public eventDataBoundUsage = eventsDataBoundUsage;
  public eventsHeaderClickUsage = eventsHeaderClickUsage;
  public eventsRowClickUsage = eventsRowClickUsage;
  public eventsRowDoubleClickUsage = eventsRowDoubleClickUsage;

  public demoSnippet = demoSnippet;
}
