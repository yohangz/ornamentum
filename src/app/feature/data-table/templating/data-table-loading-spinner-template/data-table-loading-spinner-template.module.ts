import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableLoadingSpinnerTemplateComponent, LoadingSpinnerTemplateUsageComponent } from './index';

import { DataTableLoadingSpinnerTemplateRoutingModule } from './data-table-loading-spinner-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table loading spinner template module.
 */
@NgModule({
  declarations: [DataTableLoadingSpinnerTemplateComponent, LoadingSpinnerTemplateUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableLoadingSpinnerTemplateRoutingModule
  ],
  providers: []
})
export class DataTableLoadingSpinnerTemplateModule {
}
