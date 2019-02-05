import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownFilteringComponent,
  FilteringUsageComponent,
  FilterDebounceUsageComponent,
  FilterDebounceTimeUsageComponent,
  FilterTextUsageComponent
} from './index';

import { DropdownFilteringRoutingModule } from './dropdown-filtering-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown filtering module.
 */
@NgModule({
  declarations: [
    DropdownFilteringComponent,
    FilterDebounceUsageComponent,
    FilterDebounceTimeUsageComponent,
    FilterTextUsageComponent,
    FilteringUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownFilteringRoutingModule
  ],
  providers: []
})
export class DropdownFilteringModule {
}
