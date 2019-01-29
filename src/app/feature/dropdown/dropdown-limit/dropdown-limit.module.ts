import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLimitComponent, DataLimitUsageComponent } from './index';

import { DropdownLimitRoutingModule } from './dropdown-limit-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown limit module.
 */
@NgModule({
  declarations: [DropdownLimitComponent, DataLimitUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownLimitRoutingModule
  ],
  providers: []
})
export class DropdownLimitModule {
}
