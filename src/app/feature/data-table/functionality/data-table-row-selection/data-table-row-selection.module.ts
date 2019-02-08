import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableRowSelectionRoutingModule } from './data-table-row-selection-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTableRowSelectionComponent,
  RowSelectionUsageComponent,
  SingleRowSelectionUsageComponent,
  SingleToggleRowSelectionUsageComponent,
  MultiRowSelectionUsageComponent,
  ShowRowSelectCheckboxUsageComponent,
  ShowRowSelectAllCheckboxUsageComponent,
  SelectOnRowClickUsageComponent,
  SelectTrackByUsageComponent,
  SetSelectedRowUsageComponent,
  SetSelectedRowsUsageComponent
} from './index';

/**
 * Module class for containing data table row selection module.
 */
@NgModule({
  declarations: [
    DataTableRowSelectionComponent,
    RowSelectionUsageComponent,
    SingleRowSelectionUsageComponent,
    SingleToggleRowSelectionUsageComponent,
    MultiRowSelectionUsageComponent,
    ShowRowSelectCheckboxUsageComponent,
    ShowRowSelectAllCheckboxUsageComponent,
    SelectOnRowClickUsageComponent,
    SelectTrackByUsageComponent,
    SetSelectedRowUsageComponent,
    SetSelectedRowsUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableRowSelectionRoutingModule
  ],
  providers: []
})
export class DataTableRowSelectionModule {
}
