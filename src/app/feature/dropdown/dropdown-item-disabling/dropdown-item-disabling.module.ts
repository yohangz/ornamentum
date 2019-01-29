import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownItemDisablingComponent, ItemDisablingUsageComponent } from './index';

import { DropdownItemDisablingRoutingModule } from './dropdown-item-disabling-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown item disabling module.
 */
@NgModule({
  declarations: [DropdownItemDisablingComponent, ItemDisablingUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownItemDisablingRoutingModule
  ],
  providers: []
})
export class DropdownItemDisablingModule {
}
