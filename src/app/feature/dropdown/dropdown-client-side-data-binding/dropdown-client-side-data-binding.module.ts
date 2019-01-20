import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  ClientSideDataBindingWithDataSourceComponent,
  ClientSideDataBindingWithItemsComponent,
  DropdownClientSideDataBindingComponent
} from './index';

import { DropdownClientSideDataBindingRoutingModule } from './dropdown-client-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown client side data binding module.
 */
@NgModule({
  declarations: [DropdownClientSideDataBindingComponent, ClientSideDataBindingWithItemsComponent, ClientSideDataBindingWithDataSourceComponent],
  exports: [],
  imports: [CommonModule, SharedModule.forRoot(), DropdownModule.forRoot(), DropdownClientSideDataBindingRoutingModule],
  providers: []
})
export class DropdownClientSideDataBindingModule {}
