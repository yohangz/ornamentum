import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableResponsiveConfComponent,
  ResponsiveConfAllUsageComponent,
  ResponsiveConfWithoutWidthHeightUsageComponent
} from './index';

import { DataTableResponsiveConfRoutingModule } from './data-table-responsive-conf-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table responsive conf module.
 * @class DataTableResponsiveConfModule
 */
@NgModule({
  declarations: [
    DataTableResponsiveConfComponent,
    ResponsiveConfAllUsageComponent,
    ResponsiveConfWithoutWidthHeightUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableResponsiveConfRoutingModule
  ],
  providers: []
})
export class DataTableResponsiveConfModule {
}
