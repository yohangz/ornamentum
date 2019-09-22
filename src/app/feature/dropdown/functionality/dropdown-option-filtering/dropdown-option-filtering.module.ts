import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownOptionFilteringRoutingModule } from './dropdown-option-filtering-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownOptionFilteringComponent,
  FilterDebounceTimeUsageComponent,
  FilterDebounceUsageComponent,
  FilterTextUsageComponent,
  OptionFilteringServerSideComponent,
  OptionFilteringUsageComponent
} from './index';

/**
 * Module class for containing dropdown option filtering module.
 */
@NgModule({
  declarations: [
    DropdownOptionFilteringComponent,
    FilterDebounceUsageComponent,
    FilterDebounceTimeUsageComponent,
    FilterTextUsageComponent,
    OptionFilteringUsageComponent,
    OptionFilteringServerSideComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownResourceModule.forRoot(),
    DropdownOptionFilteringRoutingModule
  ],
  providers: []
})
export class DropdownOptionFilteringModule {
}
