import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableRowExpandTemplateComponent, RowExpandExpandableDetailViewComponent, RowExpandLoadingSpinnerUsageComponent,
  RowExpandOnClickUsageComponent, RowExpandTemplateUsageComponent
} from './index';

import { DataTableRowExpandTemplateRoutingModule } from './data-table-row-expand-template-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table row expand template module.
 * @class DataTableRowExpandTemplateModule
 */
@NgModule({
  declarations: [
    DataTableRowExpandTemplateComponent,
    RowExpandTemplateUsageComponent,
    RowExpandOnClickUsageComponent,
    RowExpandLoadingSpinnerUsageComponent,
    RowExpandExpandableDetailViewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableRowExpandTemplateRoutingModule
  ],
  providers: []
})
export class DataTableRowExpandTemplateModule {
}
