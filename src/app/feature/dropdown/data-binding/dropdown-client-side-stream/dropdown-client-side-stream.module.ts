import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownClientSideStreamRoutingModule } from './dropdown-client-side-stream-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownClientSideStreamComponent, ClientSideStreamUsageComponent } from './index';

/**
 * Module class for containing dropdown client side stream data binding module.
 */
@NgModule({
  declarations: [DropdownClientSideStreamComponent, ClientSideStreamUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownClientSideStreamRoutingModule
  ],
  providers: []
})
export class DropdownClientSideStreamModule {
}
