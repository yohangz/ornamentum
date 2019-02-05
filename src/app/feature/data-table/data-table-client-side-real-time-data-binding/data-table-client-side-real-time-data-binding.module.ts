import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableClientSideRealTimeDataBindingComponent, ClientSideRealTimeDataBindingUsageComponent } from './index';

import { DataTableClientSideRealTimeDataBindingRoutingModule } from './data-table-client-side-real-time-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table client side real time data binding module.
 */
@NgModule({
  declarations: [DataTableClientSideRealTimeDataBindingComponent, ClientSideRealTimeDataBindingUsageComponent],
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
    DataTableClientSideRealTimeDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableClientSideRealTimeDataBindingModule {
}
