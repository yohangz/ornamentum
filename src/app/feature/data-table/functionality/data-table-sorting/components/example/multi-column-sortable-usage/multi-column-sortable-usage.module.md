import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { MultiColumnSortableUsageComponent } from './multi-column-sortable-usage.component';

@NgModule({
  bootstrap: [MultiColumnSortableUsageComponent],
  declarations: [MultiColumnSortableUsageComponent],
  imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class MultiColumnSortableUsageModule {
}
