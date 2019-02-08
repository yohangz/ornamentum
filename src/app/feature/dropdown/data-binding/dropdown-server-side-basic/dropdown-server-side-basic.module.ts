import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownServerSideBasicComponent, ServerSideBasicUsageComponent } from './index';

import { DropdownServerSideBasicRoutingModule } from './dropdown-server-side-basic-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing dropdown server side basic data binding module.
 */
@NgModule({
  declarations: [
    DropdownServerSideBasicComponent,
    ServerSideBasicUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownResourceModule,
    DropdownServerSideBasicRoutingModule
  ],
  providers: []
})
export class DropdownServerSideBasicModule {
}
