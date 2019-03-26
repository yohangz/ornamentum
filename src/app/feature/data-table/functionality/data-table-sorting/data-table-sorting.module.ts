import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableSortingRoutingModule } from './data-table-sorting-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  SortingUsageComponent,
  DataTableSortingComponent,
  MultiColumnSortableUsageComponent,
  SortFieldUsageComponent,
  SortOrderUsageComponent,
  ServerSideSingleColumnSortingComponent,
  ServerSideMultiColumnSortingComponent
} from './index';

/**
 * Module class for containing data table sorting module.
 */
@NgModule({
  declarations: [
    DataTableSortingComponent,
    SortingUsageComponent,
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
    DataTableResourceModule.forRoot(),
    DataTableSortingRoutingModule
  ],
  providers: []
})
export class DataTableSortingModule {
}
