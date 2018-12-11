import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableNoRecordsTemplateComponent, NoRecordsTemplateUsageComponent } from './index';

import { DataTableNoRecordsTemplateRoutingModule } from './data-table-no-records-template-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table no records template module.
 * @class DataTableNoRecordsTemplateModule
 */
@NgModule({
  declarations: [
    DataTableNoRecordsTemplateComponent,
    NoRecordsTemplateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableNoRecordsTemplateRoutingModule
  ],
  providers: []
})
export class DataTableNoRecordsTemplateModule {
}
