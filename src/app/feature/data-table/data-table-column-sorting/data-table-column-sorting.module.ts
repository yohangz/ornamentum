import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { ColumnSortingUsageComponent, DataTableColumnSortingComponent } from './index';

import { DataTableColumnSortingRoutingModule } from './data-table-column-sorting-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table column sorting module.
 * @class DataTableColumnSortingModule
 */
@NgModule({
  declarations: [
    ColumnSortingUsageComponent,
    DataTableColumnSortingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableColumnSortingRoutingModule
  ],
  providers: []
})
export class DataTableColumnSortingModule {
}
