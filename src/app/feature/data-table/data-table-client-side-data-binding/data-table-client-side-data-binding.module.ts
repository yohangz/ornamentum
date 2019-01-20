import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  ClientSideDataBindingWithDataSourceComponent,
  ClientSideDataBindingWithItemsComponent,
  DataTableClientSideDataBindingComponent
} from './index';

import { DataTableClientSideDataBindingRoutingModule } from './data-table-client-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ClientSideDataBindingWithItemsComponent, ClientSideDataBindingWithDataSourceComponent, DataTableClientSideDataBindingComponent],
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
    DataTableClientSideDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableClientSideDataBindingModule {}
