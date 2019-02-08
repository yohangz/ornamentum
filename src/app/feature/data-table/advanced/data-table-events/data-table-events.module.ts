import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableEventsRoutingModule } from './data-table-events-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

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

/**
 * Module class for containing data table events module.
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
    DataTableModule.forRoot(),
    DataTableEventsRoutingModule
  ],
  providers: []
})
export class DataTableEventsModule {
}
