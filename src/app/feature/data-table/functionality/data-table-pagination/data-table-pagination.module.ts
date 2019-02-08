import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTablePaginationRoutingModule } from './data-table-pagination-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTablePaginationComponent,
  PaginationUsageComponent,
  PageUsageComponent,
  LimitUsageComponent
} from './index';

/**
 * Module class for containing data table pagination module.
 */
@NgModule({
  declarations: [
    DataTablePaginationComponent,
    PaginationUsageComponent,
    PageUsageComponent,
    LimitUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTablePaginationRoutingModule
  ],
  providers: []
})
export class DataTablePaginationModule {
}
