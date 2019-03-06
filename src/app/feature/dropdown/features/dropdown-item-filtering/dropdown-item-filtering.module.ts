import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownItemFilteringRoutingModule } from './dropdown-item-filtering-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownItemFilteringComponent,
  FilterDebounceTimeUsageComponent,
  FilterDebounceUsageComponent,
  FilterTextUsageComponent,
  ItemFilteringServerSideComponent,
  ItemFilteringUsageComponent
} from './index';

/**
 * Module class for containing dropdown item filtering module.
 */
@NgModule({
  declarations: [
    DropdownItemFilteringComponent,
    FilterDebounceUsageComponent,
    FilterDebounceTimeUsageComponent,
    FilterTextUsageComponent,
    ItemFilteringUsageComponent,
    ItemFilteringServerSideComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownResourceModule.forRoot(),
    DropdownItemFilteringRoutingModule
  ],
  providers: []
})
export class DropdownItemFilteringModule {
}
