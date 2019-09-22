import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLazyLoadingRoutingModule } from './dropdown-lazy-loading-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownLazyLoadingComponent,
  LazyLoadingUsageComponent,
  LazyLoadingLimitUsageComponent,
  LazyLoadingLoadViewDistanceUsageComponent
} from './index';

/**
 * Module class for containing dropdown lazy loading module.
 */
@NgModule({
  declarations: [
    DropdownLazyLoadingComponent,
    LazyLoadingLimitUsageComponent,
    LazyLoadingLoadViewDistanceUsageComponent,
    LazyLoadingUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownLazyLoadingRoutingModule
  ],
  providers: []
})
export class DropdownLazyLoadingModule {
}
