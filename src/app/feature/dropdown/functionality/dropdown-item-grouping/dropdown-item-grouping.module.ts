import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownItemGroupingRoutingModule } from './dropdown-item-grouping-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownItemGroupingComponent, ItemGroupingUsageComponent } from './index';

/**
 * Module class for containing dropdown item grouping module.
 */
@NgModule({
  declarations: [DropdownItemGroupingComponent, ItemGroupingUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownItemGroupingRoutingModule
  ],
  providers: []
})
export class DropdownItemGroupingModule {
}
