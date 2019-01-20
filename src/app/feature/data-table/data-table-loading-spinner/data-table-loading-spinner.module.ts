import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableLoadingSpinnerComponent, LoadingSpinnerUsageComponent } from './index';

import { DataTableLoadingSpinnerRoutingModule } from './data-table-loading-spinner-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table loading spinner module.
 */
@NgModule({
  declarations: [DataTableLoadingSpinnerComponent, LoadingSpinnerUsageComponent],
  exports: [],
  imports: [CommonModule, FormsModule, SharedModule.forRoot(), DataTableModule.forRoot(), DataTableLoadingSpinnerRoutingModule],
  providers: []
})
export class DataTableLoadingSpinnerModule {}
