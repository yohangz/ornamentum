import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableOverviewComponent,
  BasicUsageComponent,
  BasicUsageExpandableDetailViewComponent
} from './index';

import { DataTableOverviewRoutingModule } from './data-table-overview-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Data table overview feature module.
 */
@NgModule({
  declarations: [
    DataTableOverviewComponent,
    BasicUsageComponent,
    BasicUsageExpandableDetailViewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableOverviewRoutingModule
  ],
  providers: []
})
export class DataTableOverviewModule {
}
