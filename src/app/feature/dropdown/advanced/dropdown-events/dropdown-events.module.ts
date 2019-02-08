import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownEventsComponent,
  EventsUsageComponent,
  DataBoundUsageComponent,
  InitUsageComponent,
  SelectChangeUsageComponent,
  TriggerSelectChangeOnFirstOptionSelectUsageComponent,
  TriggerSelectChangeOnInitUsageComponent,
  TriggerSelectChangeOnModelUpdateUsageComponent
} from './index';

import { DropdownEventsRoutingModule } from './dropdown-events-routing.module';

import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

/**
 * Module class for containing dropdown events module.
 */
@NgModule({
  declarations: [
    DropdownEventsComponent,
    EventsUsageComponent,
    DataBoundUsageComponent,
    InitUsageComponent,
    SelectChangeUsageComponent,
    TriggerSelectChangeOnFirstOptionSelectUsageComponent,
    TriggerSelectChangeOnInitUsageComponent,
    TriggerSelectChangeOnModelUpdateUsageComponent
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
