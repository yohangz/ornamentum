import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionDisplayValueRoutingModule } from './dropdown-option-display-value-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownOptionDisplayValueComponent, OptionDisplayValueUsageComponent } from './index';

/**
 * Module class for containing dropdown option display module.
 */
@NgModule({
  declarations: [
    DropdownOptionDisplayValueComponent,
    OptionDisplayValueUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOptionDisplayValueRoutingModule
  ],
  providers: []
})
export class DropdownOptionDisplayValueModule {
}
