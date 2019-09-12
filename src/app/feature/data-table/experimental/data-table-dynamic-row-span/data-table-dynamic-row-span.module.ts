import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableDynamicRowSpanRoutingModule } from './data-table-dynamic-row-span-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DataTableDynamicRowSpanComponent, DynamicRowSpanUsageComponent } from './index';

/**
 * Module class for containing data table dynamic row span module.
 */
@NgModule({
  declarations: [DataTableDynamicRowSpanComponent, DynamicRowSpanUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableDynamicRowSpanRoutingModule
  ],
  providers: []
})
export class DataTableDynamicRowSpanModule {
}
