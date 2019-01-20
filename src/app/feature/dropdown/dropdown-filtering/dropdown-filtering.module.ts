import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownFilteringComponent,
  FilteringUsageComponent,
  FilteringFilterDebounceUsageComponent,
  FilteringFilterDebounceTimeUsageComponent,
  FilteringFilterTextUsageComponent
} from './index';

import { DropdownFilteringRoutingModule } from './dropdown-filtering-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown filtering module.
 */
@NgModule({
  declarations: [
    DropdownFilteringComponent,
    FilteringFilterDebounceUsageComponent,
    FilteringFilterDebounceTimeUsageComponent,
    FilteringFilterTextUsageComponent,
    FilteringUsageComponent
  ],
  exports: [],
  imports: [CommonModule, SharedModule.forRoot(), DropdownModule.forRoot(), DropdownFilteringRoutingModule],
  providers: []
})
export class DropdownFilteringModule {}
