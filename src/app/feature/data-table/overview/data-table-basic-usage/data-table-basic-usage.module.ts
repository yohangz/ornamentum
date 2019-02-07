import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableBasicUsageComponent,
  AdvancedUsageComponent,
  AdvancedUsageExpandableDetailViewComponent
} from './index';

import { DataTableBasicUsageRoutingModule } from './data-table-basic-usage-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Data table overview feature module.
 */
@NgModule({
  declarations: [
    DataTableBasicUsageComponent,
    AdvancedUsageComponent,
    AdvancedUsageExpandableDetailViewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableBasicUsageRoutingModule
  ],
  providers: []
})
export class DataTableBasicUsageModule {
}
