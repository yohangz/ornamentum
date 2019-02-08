import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableSubstituteRowsRoutingModule } from './data-table-substitute-rows-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTableSubstituteRowsComponent,
  WithoutSubstituteRowsUsageComponent,
  SubstituteRowsUsageComponent
} from './index';

/**
 * Module class for containing data table substitute rows module.
 */
@NgModule({
  declarations: [
    DataTableSubstituteRowsComponent,
    WithoutSubstituteRowsUsageComponent,
    SubstituteRowsUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableSubstituteRowsRoutingModule
  ],
  providers: []
})
export class DataTableSubstituteRowsModule {
}
