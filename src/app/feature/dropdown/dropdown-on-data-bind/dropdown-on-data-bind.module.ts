import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOnDataBindComponent, OnDataBindUsageComponent } from './index';

import { DropdownOnDataBindRoutingModule } from './dropdown-on-data-bind-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown on data bind module.
 * @class DropdownOnDataBindModule
 */
@NgModule({
  declarations: [
    DropdownOnDataBindComponent,
    OnDataBindUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOnDataBindRoutingModule
  ],
  providers: []
})
export class DropdownOnDataBindModule {
}
