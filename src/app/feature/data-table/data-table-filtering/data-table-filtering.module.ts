import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableFilteringComponent, FilterDropdownUsageComponent, FilteringUsageComponent, FilterTextBoxUsageComponent } from './index';

import { DataTableFilteringRoutingModule } from './data-table-filtering-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table filtering module.
 * @class DataTableFilteringModule
 */
@NgModule({
  declarations: [
    DataTableFilteringComponent,
    FilterDropdownUsageComponent,
    FilterTextBoxUsageComponent,
    FilteringUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableFilteringRoutingModule
  ],
  providers: []
})
export class DataTableFilteringModule {
}
