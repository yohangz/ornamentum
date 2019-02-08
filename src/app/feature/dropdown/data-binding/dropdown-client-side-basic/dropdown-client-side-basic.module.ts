import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownClientSideBasicComponent,
  ItemsUsageComponent,
  DataSourceUsageComponent,
} from './index';

import { DropdownClientSideBasicRoutingModule } from './dropdown-client-side-basic-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing dropdown client side basic data binding module.
 */
@NgModule({
  declarations: [
    DropdownClientSideBasicComponent,
    ItemsUsageComponent,
    DataSourceUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownClientSideBasicRoutingModule
  ],
  providers: []
})
export class DropdownClientSideBasicModule {
}
