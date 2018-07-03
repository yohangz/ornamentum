import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableRowGroupingComponent, RowGroupingUsageComponent } from './index';

import { DataTableRowGroupingRoutingModule } from './data-table-row-grouping-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table row grouping module.
 * @class DataTableRowGroupingModule
 */
@NgModule({
  declarations: [
    DataTableRowGroupingComponent,
    RowGroupingUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableRowGroupingRoutingModule
  ],
  providers: []
})
export class DataTableRowGroupingModule {
}
