import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnSortingSortOrderUsageComponent } from './pagination-page-usage.component';

@NgModule({
 bootstrap: [ColumnSortingSortOrderUsageComponent],
 declarations: [ColumnSortingSortOrderUsageComponent],
 imports: [
    BrowserModule,
    DataTableModule.forRoot()
  ]
})
export class ColumnSortingSortOrderUsageModule {
}
