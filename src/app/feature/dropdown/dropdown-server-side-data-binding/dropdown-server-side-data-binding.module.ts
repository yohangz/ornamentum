import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownServerSideDataBindingComponent, ServerSideDataBindingUsageComponent } from './index';

import { DropdownServerSideDataBindingRoutingModule } from './dropdown-server-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown server side data binding module.
 */
@NgModule({
  declarations: [
    DropdownServerSideDataBindingComponent,
    ServerSideDataBindingUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownResourceModule,
    DropdownServerSideDataBindingRoutingModule
  ],
  providers: []
})
export class DropdownServerSideDataBindingModule {
}
