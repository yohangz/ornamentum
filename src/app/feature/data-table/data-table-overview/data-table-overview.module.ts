import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableOverviewComponent,
  AdvancedUsageComponent,
  AdvancedUsageExpandableDetailViewComponent
} from './index';

import { DataTableOverviewRoutingModule } from './data-table-overview-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Data table overview feature module.
 */
@NgModule({
  declarations: [
    DataTableOverviewComponent,
    AdvancedUsageComponent,
    AdvancedUsageExpandableDetailViewComponent
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
