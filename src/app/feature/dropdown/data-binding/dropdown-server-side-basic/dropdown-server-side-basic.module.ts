import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownServerSideBasicRoutingModule } from './dropdown-server-side-basic-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownServerSideBasicComponent, ServerSideBasicUsageComponent } from './index';

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
    DropdownResourceModule.forRoot(),
    DropdownServerSideBasicRoutingModule
  ],
  providers: []
})
export class DropdownServerSideBasicModule {
}
