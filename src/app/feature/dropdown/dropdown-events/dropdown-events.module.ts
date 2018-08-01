import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownEventsComponent, EventsUsageComponent } from './index';

import { DropdownEventsRoutingModule } from './dropdown-events-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown events module.
 * @class DropdownEventsModule
 */
@NgModule({
  declarations: [
    DropdownEventsComponent,
    EventsUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownEventsRoutingModule
  ],
  providers: []
})
export class DropdownEventsModule {
}
