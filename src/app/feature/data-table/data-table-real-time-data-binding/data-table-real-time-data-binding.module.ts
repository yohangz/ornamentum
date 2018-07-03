import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableRealTimeDataBindingComponent, RealTimeDataBindingComponent } from './index';

import { DataTableRealTimeDataBindingRoutingModule } from './data-table-real-time-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table real time data binding module.
 * @class DataTableRealTimeDataBindingModule
 */
@NgModule({
  declarations: [
    DataTableRealTimeDataBindingComponent,
    RealTimeDataBindingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableRealTimeDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableRealTimeDataBindingModule {
}
