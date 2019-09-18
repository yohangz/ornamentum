import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableDataLoadingTemplateComponent, DataLoadingTemplateUsageComponent } from './index';

import { DataTableDataLoadingTemplateRoutingModule } from './data-table-data-loading-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table data loading template module.
 */
@NgModule({
  declarations: [DataTableDataLoadingTemplateComponent, DataLoadingTemplateUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableDataLoadingTemplateRoutingModule
  ],
  providers: []
})
export class DataTableDataLoadingTemplateModule {
}
