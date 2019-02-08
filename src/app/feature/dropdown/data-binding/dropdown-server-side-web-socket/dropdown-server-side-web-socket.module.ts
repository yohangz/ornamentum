import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';

import { DropdownServerSideWebSocketComponent, ServerSideWebSocketUsageComponent } from './index';

import { DropdownServerSideWebSocketRoutingModule } from './dropdown-server-side-web-socket-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing dropdown server side web socket data binding module.
 */
@NgModule({
  declarations: [
    DropdownServerSideWebSocketComponent,
    ServerSideWebSocketUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownResourceModule,
    DropdownServerSideWebSocketRoutingModule
  ],
  providers: []
})
export class DropdownServerSideWebSocketModule {
}
