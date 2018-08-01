import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownDisablingComponent, DisablingUsageComponent } from './index';

import { DropdownDisablingRoutingModule } from './dropdown-disabling-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown disabling module.
 * @class DropdownDisablingModule
 */
@NgModule({
  declarations: [
    DropdownDisablingComponent,
    DisablingUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownDisablingRoutingModule
  ],
  providers: []
})
export class DropdownDisablingModule {
}
