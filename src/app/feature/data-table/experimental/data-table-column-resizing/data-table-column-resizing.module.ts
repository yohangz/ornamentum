import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableColumnResizingRoutingModule } from './data-table-column-resizing-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { ColumnResizingUsageComponent, DataTableColumnResizingComponent } from './index';

/**
 * Module class for containing data table resizable module.
 */
@NgModule({
  declarations: [ColumnResizingUsageComponent, DataTableColumnResizingComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableColumnResizingRoutingModule
  ],
  providers: []
})
export class DataTableColumnResizingModule {
}
