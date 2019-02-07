import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableClientSideStreamComponent, ClientSideStreamUsageComponent } from './index';

import { DataTableClientSideStreamRoutingModule } from './data-table-client-side-stream-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table client side stream data binding module.
 */
@NgModule({
  declarations: [DataTableClientSideStreamComponent, ClientSideStreamUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true,
      showHeader: true,
      pageable: true
    }),
    DataTableClientSideStreamRoutingModule
  ],
  providers: []
})
export class DataTableClientSideStreamModule {
}
