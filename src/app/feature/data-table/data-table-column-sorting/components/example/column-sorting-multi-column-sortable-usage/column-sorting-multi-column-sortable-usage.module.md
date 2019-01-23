import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { ColumnSortingMultiColumnSortableUsageComponent } from './column-sorting-multi-column-sortable-usage.component';

@NgModule({
  bootstrap: [ColumnSortingMultiColumnSortableUsageComponent],
  declarations: [ColumnSortingMultiColumnSortableUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class ColumnSortingMultiColumnSortableUsageModule {
}
