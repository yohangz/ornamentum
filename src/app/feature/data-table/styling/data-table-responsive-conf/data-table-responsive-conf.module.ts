import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableResponsiveConfRoutingModule } from './data-table-responsive-conf-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTableResponsiveConfComponent,
  ResponsiveConfUsageComponent,
  ResponsiveConfDetailViewComponent,
  ContentHeightUsageComponent,
  ExpanderColumnWidthUsageComponent,
  IndexColumnWidthUsageComponent,
  MinContentHeightUsageComponent,
  MinContentWidthUsageComponent,
  SelectionColumnWidthUsageComponent,
  WidthUsageComponent,
  ColumnSelectorWidthUsageComponent
} from './index';

/**
 * Module class for containing data table responsive conf module.
 */
@NgModule({
  declarations: [
    DataTableResponsiveConfComponent,
    ResponsiveConfUsageComponent,
    ResponsiveConfDetailViewComponent,
    ContentHeightUsageComponent,
    ExpanderColumnWidthUsageComponent,
    IndexColumnWidthUsageComponent,
    MinContentHeightUsageComponent,
    MinContentWidthUsageComponent,
    SelectionColumnWidthUsageComponent,
    WidthUsageComponent,
    ColumnSelectorWidthUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResponsiveConfRoutingModule
  ],
  providers: []
})
export class DataTableResponsiveConfModule {
}
