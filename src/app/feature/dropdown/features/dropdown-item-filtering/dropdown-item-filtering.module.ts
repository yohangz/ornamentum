import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownItemFilteringRoutingModule } from './dropdown-item-filtering-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownItemFilteringComponent,
  ItemFilteringUsageComponent,
  FilterDebounceUsageComponent,
  FilterDebounceTimeUsageComponent,
  FilterTextUsageComponent
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
    ItemFilteringUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownItemFilteringRoutingModule
  ],
  providers: []
})
export class DropdownItemFilteringModule {
}
