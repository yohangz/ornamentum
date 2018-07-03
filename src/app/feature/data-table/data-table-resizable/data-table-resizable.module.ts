import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { ColumnResizableUsageComponent, DataTableResizableComponent } from './index';

import { DataTableResizableRoutingModule } from './data-table-resizable-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table resizable module.
 * @class DataTableResizableModule
 */
@NgModule({
  declarations: [
    ColumnResizableUsageComponent,
    DataTableResizableComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableResizableRoutingModule
  ],
  providers: []
})
export class DataTableResizableModule {
}
