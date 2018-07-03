import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableSubstituteRowsComponent,
  WithoutSubstituteRowsUsageComponent,
  WithSubstituteRowsUsageComponent
} from './index';

import { DataTableSubstituteRowsRoutingModule } from './data-table-substitute-rows-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table substitute rows module.
 * @class DataTableSubstituteRowsModule
 */
@NgModule({
  declarations: [
    DataTableSubstituteRowsComponent,
    WithoutSubstituteRowsUsageComponent,
    WithSubstituteRowsUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableSubstituteRowsRoutingModule
  ],
  providers: []
})
export class DataTableSubstituteRowsModule {
}
