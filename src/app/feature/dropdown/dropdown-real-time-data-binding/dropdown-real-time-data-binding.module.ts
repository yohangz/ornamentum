import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownRealTimeDataBindingComponent, RealTimeDataBindingComponent } from './index';

import { DropdownRealTimeDataBindingRoutingModule } from './dropdown-real-time-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown real time data binding module.
 * @class DropdownRealTimeDataBindingModule
 */
@NgModule({
  declarations: [
    DropdownRealTimeDataBindingComponent,
    RealTimeDataBindingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownRealTimeDataBindingRoutingModule
  ],
  providers: []
})
export class DropdownRealTimeDataBindingModule {
}
