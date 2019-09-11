import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableCellTemplateRoutingModule } from './data-table-cell-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { CellTemplateRowSpanUsageComponent, CellTemplateUsageComponent, DataTableCellTemplateComponent } from './index';
import { CellTemplateAvatarUsageComponent } from './components/example/cell-template-avatar-usage/cell-template-avatar-usage.component';

/**
 * Module class for containing data table cell template module.
 */
@NgModule({
  declarations: [
    CellTemplateUsageComponent,
    DataTableCellTemplateComponent,
    CellTemplateAvatarUsageComponent,
    CellTemplateRowSpanUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableCellTemplateRoutingModule
  ],
  providers: []
})
export class DataTableCellTemplateModule {
}
