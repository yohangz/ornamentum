import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableColumnFilteringComponent,
  ColumnFilteringDropdownUsageComponent,
  ColumnFilteringUsageComponent,
  ColumnFilteringTextBoxUsageComponent
} from './index';

import { DataTableColumnFilteringRoutingModule } from './data-table-column-filtering-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table column filtering module.
 */
@NgModule({
  declarations: [
    DataTableColumnFilteringComponent,
    ColumnFilteringDropdownUsageComponent,
    ColumnFilteringTextBoxUsageComponent,
    ColumnFilteringUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableColumnFilteringRoutingModule
  ],
  providers: []
})
export class DataTableColumnFilteringModule {
}
