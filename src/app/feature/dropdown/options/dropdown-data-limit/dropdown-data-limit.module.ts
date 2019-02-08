import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownDataLimitRoutingModule } from './dropdown-data-limit-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownDataLimitComponent, DataLimitUsageComponent } from './index';

/**
 * Module class for containing dropdown limit module.
 */
@NgModule({
  declarations: [DropdownDataLimitComponent, DataLimitUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownDataLimitRoutingModule
  ],
  providers: []
})
export class DropdownDataLimitModule {
}
