import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableColumnSortingRoutingModule } from './data-table-column-sorting-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  ColumnSortingUsageComponent,
  DataTableColumnSortingComponent,
  MultiColumnSortableUsageComponent,
  SortFieldUsageComponent,
  SortOrderUsageComponent,
  ServerSideSingleColumnSortingComponent,
  ServerSideMultiColumnSortingComponent
} from './index';

/**
 * Module class for containing data table column sorting module.
 */
@NgModule({
  declarations: [
    DataTableColumnSortingComponent,
    ColumnSortingUsageComponent,
    SortOrderUsageComponent,
    SortFieldUsageComponent,
    MultiColumnSortableUsageComponent,
    ServerSideSingleColumnSortingComponent,
    ServerSideMultiColumnSortingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule,
    DataTableColumnSortingRoutingModule
  ],
  providers: []
})
export class DataTableColumnSortingModule {
}
