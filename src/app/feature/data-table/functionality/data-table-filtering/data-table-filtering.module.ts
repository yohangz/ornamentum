import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableFilteringRoutingModule } from './data-table-filtering-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  FilteringDropdownUsageComponent,
  FilteringTextBoxUsageComponent,
  FilteringUsageComponent,
  DataTableFilteringComponent,
  ServerSideDropdownFilteringUsageComponent,
  ServerSideTextBoxFilteringUsageComponent
} from './index';

/**
 * Module class for containing data table filtering module.
 */
@NgModule({
  declarations: [
    DataTableFilteringComponent,
    FilteringDropdownUsageComponent,
    FilteringTextBoxUsageComponent,
    FilteringUsageComponent,
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
    DataTableFilteringRoutingModule
  ],
  providers: []
})
export class DataTableFilteringModule {
}
