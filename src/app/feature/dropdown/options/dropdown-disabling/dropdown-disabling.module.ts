import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownDisablingRoutingModule } from './dropdown-disabling-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownDisablingComponent, DisablingUsageComponent } from './index';

/**
 * Module class for containing dropdown disabling module.
 */
@NgModule({
  declarations: [
    DropdownDisablingComponent,
    DisablingUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule, SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownDisablingRoutingModule
  ],
  providers: []
})
export class DropdownDisablingModule {
}
