import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableLimitComponent,
  LimitWithoutPaginationUsageComponent,
  LimitWithPaginationUsageComponent,
  PaginationWithoutLimitUsageComponent,
  WithoutLimitAndPaginationUsageComponent
} from './index';

import { DataTableLimitRoutingModule } from './data-table-limit-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table limit module.
 * @class DataTableLimitModule
 */
@NgModule({
  declarations: [
    DataTableLimitComponent,
    LimitWithoutPaginationUsageComponent,
    LimitWithPaginationUsageComponent,
    PaginationWithoutLimitUsageComponent,
    WithoutLimitAndPaginationUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableLimitRoutingModule
  ],
  providers: []
})
export class DataTableLimitModule {
}
