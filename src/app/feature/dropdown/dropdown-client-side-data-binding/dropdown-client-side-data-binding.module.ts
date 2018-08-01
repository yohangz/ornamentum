import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { ClientSideDataBindingComponent, DropdownClientSideDataBindingComponent } from './index';

import { DropdownClientSideDataBindingRoutingModule } from './dropdown-client-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown client side data binding module.
 * @class DropdownClientSideDataBindingModule
 */
@NgModule({
  declarations: [
    ClientSideDataBindingComponent,
    DropdownClientSideDataBindingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownClientSideDataBindingRoutingModule
  ],
  providers: []
})
export class DropdownClientSideDataBindingModule {
}
