import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableColumnSortingComponent,
  ColumnSortingUsageComponent,
  SortOrderUsageComponent,
  SortFieldUsageComponent,
  MultiColumnSortableUsageComponent,
} from './index';

import { DataTableColumnSortingRoutingModule } from './data-table-column-sorting-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table column sorting module.
 */
@NgModule({
  declarations: [
    DataTableColumnSortingComponent,
    ColumnSortingUsageComponent,
    SortOrderUsageComponent,
    SortFieldUsageComponent,
    MultiColumnSortableUsageComponent
  ],
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
    DataTableColumnSortingRoutingModule
  ],
  providers: []
})
export class DataTableColumnSortingModule {}
