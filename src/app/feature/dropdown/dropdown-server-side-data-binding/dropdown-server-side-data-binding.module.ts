import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownServerSideDataBindingComponent, ServerSideDataBindingComponent } from './index';

import { DropdownServerSideDataBindingRoutingModule } from './dropdown-server-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown server side data binding module.
 */
@NgModule({
  declarations: [DropdownServerSideDataBindingComponent, ServerSideDataBindingComponent],
  exports: [],
  imports: [CommonModule, SharedModule.forRoot(), DropdownModule.forRoot(), DropdownServerSideDataBindingRoutingModule],
  providers: []
})
export class DropdownServerSideDataBindingModule {}
