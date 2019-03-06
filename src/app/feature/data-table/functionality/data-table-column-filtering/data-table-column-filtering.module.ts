import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableColumnFilteringRoutingModule } from './data-table-column-filtering-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  ColumnFilteringDropdownUsageComponent,
  ColumnFilteringTextBoxUsageComponent,
  ColumnFilteringUsageComponent,
  DataTableColumnFilteringComponent,
  ServerSideDropdownFilteringUsageComponent,
  ServerSideTextBoxFilteringUsageComponent
} from './index';

/**
 * Module class for containing data table column filtering module.
 */
@NgModule({
  declarations: [
    DataTableColumnFilteringComponent,
    ColumnFilteringDropdownUsageComponent,
    ColumnFilteringTextBoxUsageComponent,
    ColumnFilteringUsageComponent,
    ServerSideTextBoxFilteringUsageComponent,
    ServerSideDropdownFilteringUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule.forRoot(),
    DataTableColumnFilteringRoutingModule
  ],
  providers: []
})
export class DataTableColumnFilteringModule {
}
