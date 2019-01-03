import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableEventsComponent,
  EventsUsageComponent,
  EventsInitUsageComponent,
  EventsAllRowSelectChangeUsageComponent,
  EventsCellBindUsageComponent,
  EventsCellClickUsageComponent,
  EventsColumnBindUsageComponent,
  EventsDataBoundUsageComponent,
  EventsHeaderClickUsageComponent,
  EventsRowBindUsageComponent,
  EventsRowClickUsageComponent,
  EventsRowDoubleClickUsageComponent,
  EventsRowSelectChangeUsageComponent
} from './index';

import { DataTableEventsRoutingModule } from './data-table-events-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table events module.
 * @class DataTableEventsModule
 */
@NgModule({
  declarations: [
    DataTableEventsComponent,
    EventsUsageComponent,
    EventsInitUsageComponent,
    EventsAllRowSelectChangeUsageComponent,
    EventsCellBindUsageComponent,
    EventsCellClickUsageComponent,
    EventsColumnBindUsageComponent,
    EventsDataBoundUsageComponent,
    EventsHeaderClickUsageComponent,
    EventsRowBindUsageComponent,
    EventsRowClickUsageComponent,
    EventsRowDoubleClickUsageComponent,
    EventsRowSelectChangeUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableEventsRoutingModule
  ],
  providers: []
})
export class DataTableEventsModule {
}
