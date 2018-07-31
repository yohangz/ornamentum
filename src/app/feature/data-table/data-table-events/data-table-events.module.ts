import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableEventsComponent, EventsUsageComponent } from './index';

import { DataTableEventsRoutingModule } from './data-table-events-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table events module.
 * @class DataTableEventsModule
 */
@NgModule({
  declarations: [
    DataTableEventsComponent,
    EventsUsageComponent
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
