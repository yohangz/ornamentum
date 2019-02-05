import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTablePaginationComponent,
  PaginationUsageComponent,
  PageUsageComponent,
  LimitUsageComponent
} from './index';

import { DataTablePaginationRoutingModule } from './data-table-pagination-routing.module';

import { SharedModule } from '../../../shared/shared.module';

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
    DataTableModule.forRoot({
      showHeader: true,
      showColumnSelector: true
    }),
    DataTablePaginationRoutingModule
  ],
  providers: []
})
export class DataTablePaginationModule {
}
