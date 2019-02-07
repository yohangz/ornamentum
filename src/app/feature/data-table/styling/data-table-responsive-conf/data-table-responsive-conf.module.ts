import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableResponsiveConfComponent,
  ResponsiveConfUsageComponent,
  ContentHeightUsageComponent,
  ExpanderColumnWidthUsageComponent,
  IndexColumnWidthUsageComponent,
  MinHeightUsageComponent,
  MinWidthUsageComponent,
  SelectionColumnWidthUsageComponent,
  WidthUsageComponent
} from './index';

import { DataTableResponsiveConfRoutingModule } from './data-table-responsive-conf-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table responsive conf module.
 */
@NgModule({
  declarations: [
    DataTableResponsiveConfComponent,
    ResponsiveConfUsageComponent,
    ContentHeightUsageComponent,
    ExpanderColumnWidthUsageComponent,
    IndexColumnWidthUsageComponent,
    MinHeightUsageComponent,
    MinWidthUsageComponent,
    SelectionColumnWidthUsageComponent,
    WidthUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true,
      showHeader: true,
      pageable: true
    }),
    DataTableResponsiveConfRoutingModule
  ],
  providers: []
})
export class DataTableResponsiveConfModule {
}
