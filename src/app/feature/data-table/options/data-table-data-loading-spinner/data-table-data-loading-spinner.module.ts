import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableDataLoadingSpinnerRoutingModule } from './data-table-data-loading-spinner-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DataTableDataLoadingSpinnerComponent, DataLoadingSpinnerUsageComponent } from './index';

/**
 * Module class for containing data table data loading spinner module.
 */
@NgModule({
  declarations: [DataTableDataLoadingSpinnerComponent, DataLoadingSpinnerUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableDataLoadingSpinnerRoutingModule
  ],
  providers: []
})
export class DataTableDataLoadingSpinnerModule {
}
