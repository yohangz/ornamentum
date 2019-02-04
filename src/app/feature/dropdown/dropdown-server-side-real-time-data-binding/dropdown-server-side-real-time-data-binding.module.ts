import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownServerSideRealTimeDataBindingComponent, ServerSideRealTimeDataBindingComponent } from './index';

import { DropdownServerSideRealTimeDataBindingRoutingModule } from './dropdown-server-side-real-time-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown server real time data binding module.
 */
@NgModule({
  declarations: [
    DropdownServerSideRealTimeDataBindingComponent,
    ServerSideRealTimeDataBindingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownResourceModule,
    DropdownServerSideRealTimeDataBindingRoutingModule
  ],
  providers: []
})
export class DropdownServerSideRealTimeDataBindingModule {
}
