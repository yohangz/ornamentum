import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableHeaderDetailsRoutingModule } from './data-table-header-details-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTableHeaderDetailsComponent,
  HeaderDetailsUsageComponent,
  ShowRefreshButtonUsageComponent,
  TitleUsageComponent,
  ShowColumnSelectorUsageComponent
} from './index';

/**
 * Module class for containing data table header details module.
 */
@NgModule({
  declarations: [
    DataTableHeaderDetailsComponent,
    HeaderDetailsUsageComponent,
    ShowRefreshButtonUsageComponent,
    TitleUsageComponent,
    ShowColumnSelectorUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableHeaderDetailsRoutingModule],
  providers: []
})
export class DataTableHeaderDetailsModule {
}
