import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableRowSelectionComponent,
  MultiRowSelectionUsageComponent,
  SingleRowSelectionUsageComponent,
  SingleToggleRowSelectionUsageComponent,
  RowSelectionUsageComponent
} from './index';

import { DataTableRowSelectionRoutingModule } from './data-table-row-selection-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table row selection module.
 * @class DataTableRowSelectionModule
 */
@NgModule({
  declarations: [
    DataTableRowSelectionComponent,
    MultiRowSelectionUsageComponent,
    SingleRowSelectionUsageComponent,
    SingleToggleRowSelectionUsageComponent,
    RowSelectionUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableRowSelectionRoutingModule
  ],
  providers: []
})
export class DataTableRowSelectionModule {
}
