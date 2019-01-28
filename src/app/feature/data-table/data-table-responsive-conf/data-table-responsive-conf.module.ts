import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableResponsiveConfComponent,
  ResponsiveConfContentHeightUsageComponent,
  ResponsiveConfExpanderColumnWidthUsageComponent,
  ResponsiveConfIndexColumnWidthUsageComponent,
  ResponsiveConfMinHeightUsageComponent,
  ResponsiveConfMinWidthUsageComponent,
  ResponsiveConfSelectionColumnWidthUsageComponent,
  ResponsiveConfUsageComponent,
  ResponsiveConfWidthUsageComponent
} from './index';

import { DataTableResponsiveConfRoutingModule } from './data-table-responsive-conf-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table responsive conf module.
 */
@NgModule({
  declarations: [
    DataTableResponsiveConfComponent,
    ResponsiveConfContentHeightUsageComponent,
    ResponsiveConfExpanderColumnWidthUsageComponent,
    ResponsiveConfIndexColumnWidthUsageComponent,
    ResponsiveConfMinHeightUsageComponent,
    ResponsiveConfMinWidthUsageComponent,
    ResponsiveConfSelectionColumnWidthUsageComponent,
    ResponsiveConfUsageComponent,
    ResponsiveConfWidthUsageComponent
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
