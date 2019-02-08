import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableServerSideWebSocketRoutingModule } from './data-table-server-side-web-socket-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DataTableServerSideWebSocketComponent, ServerSideWebSocketUsageComponent } from './index';

/**
 * Module class for containing data table server side web socket data binding module.
 */
@NgModule({
  declarations: [DataTableServerSideWebSocketComponent, ServerSideWebSocketUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule,
    DataTableServerSideWebSocketRoutingModule
  ],
  providers: []
})
export class DataTableServerSideWebSocketModule {
}
