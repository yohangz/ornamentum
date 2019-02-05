import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownClientSideRealTimeDataBindingComponent, ClientSideRealTimeDataBindingUsageComponent } from './index';

import { DropdownClientSideRealTimeDataBindingRoutingModule } from './dropdown-client-side-real-time-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown client real time data binding module.
 */
@NgModule({
  declarations: [DropdownClientSideRealTimeDataBindingComponent, ClientSideRealTimeDataBindingUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownClientSideRealTimeDataBindingRoutingModule
  ],
  providers: []
})
export class DropdownClientSideRealTimeDataBindingModule {
}
