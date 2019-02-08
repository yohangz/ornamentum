import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableColumnSortingRoutingModule } from './data-table-column-sorting-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTableColumnSortingComponent,
  ColumnSortingUsageComponent,
  SortOrderUsageComponent,
  SortFieldUsageComponent,
  MultiColumnSortableUsageComponent,
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
    MultiColumnSortableUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableColumnSortingRoutingModule
  ],
  providers: []
})
export class DataTableColumnSortingModule {
}
