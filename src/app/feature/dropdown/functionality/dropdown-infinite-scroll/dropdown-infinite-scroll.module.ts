import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownInfiniteScrollRoutingModule } from './dropdown-infinite-scroll-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownInfiniteScrollComponent,
  InfiniteScrollUsageComponent,
  InfiniteScrollLimitUsageComponent,
  InfiniteScrollLoadViewDistanceUsageComponent
} from './index';

/**
 * Module class for containing dropdown lazy loading module.
 */
@NgModule({
  declarations: [
    DropdownInfiniteScrollComponent,
    InfiniteScrollLimitUsageComponent,
    InfiniteScrollLoadViewDistanceUsageComponent,
    InfiniteScrollUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownInfiniteScrollRoutingModule
  ],
  providers: []
})
export class DropdownInfiniteScrollModule {
}
