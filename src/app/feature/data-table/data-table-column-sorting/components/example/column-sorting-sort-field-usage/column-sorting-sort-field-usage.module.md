import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { ColumnSortingSortFieldUsageComponent } from './column-sorting-sort-field-usage.component';

@NgModule({
  bootstrap: [ColumnSortingSortFieldUsageComponent],
  declarations: [ColumnSortingSortFieldUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class ColumnSortingSortFieldUsageModule {
}
