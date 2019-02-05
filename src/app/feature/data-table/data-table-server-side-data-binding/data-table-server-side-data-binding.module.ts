import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableServerSideDataBindingComponent, ServerSideDataBindingUsageComponent } from './index';

import { DataTableServerSideDataBindingRoutingModule } from './data-table-server-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table server side data binding module.
 */
@NgModule({
  declarations: [DataTableServerSideDataBindingComponent, ServerSideDataBindingUsageComponent],
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
    DataTableServerSideDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableServerSideDataBindingModule {}
