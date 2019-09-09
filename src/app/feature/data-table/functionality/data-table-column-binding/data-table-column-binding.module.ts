import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableColumnBindingRoutingModule } from './data-table-column-binding-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { ColumnBindingUsageComponent, DataTableColumnBindingComponent } from './index';

/**
 * Module class for containing data table resizable module.
 */
@NgModule({
  declarations: [ColumnBindingUsageComponent, DataTableColumnBindingComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableColumnBindingRoutingModule
  ],
  providers: []
})
export class DataTableColumnBindingModule {}
