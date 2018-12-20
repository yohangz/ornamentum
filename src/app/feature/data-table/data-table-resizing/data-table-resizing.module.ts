import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { ColumnResizingUsageComponent, DataTableResizingComponent } from './index';

import { DataTableResizingRoutingModule } from './data-table-resizing-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table resizable module.
 * @class DataTableResizingModule
 */
@NgModule({
  declarations: [
    ColumnResizingUsageComponent,
    DataTableResizingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableResizingRoutingModule
  ],
  providers: []
})
export class DataTableResizingModule {
}
