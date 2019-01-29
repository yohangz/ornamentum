import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownEventsComponent,
  EventsUsageComponent,
  EventsDataBoundUsageComponent,
  EventsInitUsageComponent,
  EventsSelectChangeUsageComponent,
  EventsTriggerSelectChangeOnFirstOptionSelectUsageComponent,
  EventsTriggerSelectChangeOnInitUsageComponent,
  EventsTriggerSelectChangeOnModelUpdateUsageComponent
} from './index';

import { DropdownEventsRoutingModule } from './dropdown-events-routing.module';

import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

/**
 * Module class for containing dropdown events module.
 */
@NgModule({
  declarations: [
    DropdownEventsComponent,
    EventsUsageComponent,
    EventsDataBoundUsageComponent,
    EventsInitUsageComponent,
    EventsSelectChangeUsageComponent,
    EventsTriggerSelectChangeOnFirstOptionSelectUsageComponent,
    EventsTriggerSelectChangeOnInitUsageComponent,
    EventsTriggerSelectChangeOnModelUpdateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownEventsRoutingModule
  ],
  providers: []
})
export class DropdownEventsModule {
}
