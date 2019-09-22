import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionGroupingRoutingModule } from './dropdown-option-grouping-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownOptionGroupingComponent, OptionGroupingUsageComponent } from './index';

/**
 * Module class for containing dropdown option grouping module.
 */
@NgModule({
  declarations: [DropdownOptionGroupingComponent, OptionGroupingUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOptionGroupingRoutingModule
  ],
  providers: []
})
export class DropdownOptionGroupingModule {
}
