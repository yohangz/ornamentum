import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionDisablingRoutingModule } from './dropdown-option-disabling-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownOptionDisablingComponent, OptionDisablingUsageComponent } from './index';

/**
 * Module class for containing dropdown option disabling module.
 */
@NgModule({
  declarations: [DropdownOptionDisablingComponent, OptionDisablingUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOptionDisablingRoutingModule
  ],
  providers: []
})
export class DropdownOptionDisablingModule {
}
