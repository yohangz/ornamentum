import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableServerSideRealTimeDataBindingComponent, ServerSideRealTimeDataBindingComponent } from './index';

import { DataTableServerSideRealTimeDataBindingRoutingModule } from './data-table-server-side-real-time-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table server side real time data binding module.
 */
@NgModule({
  declarations: [DataTableServerSideRealTimeDataBindingComponent, ServerSideRealTimeDataBindingComponent],
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
    DataTableResourceModule,
    DataTableServerSideRealTimeDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableServerSideRealTimeDataBindingModule {}
