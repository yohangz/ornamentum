import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnSortingUsageComponent } from './column-sorting-usage.component';

@NgModule({
 bootstrap: [ColumnSortingUsageComponent],
 declarations: [ColumnSortingUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ColumnSortingUsageModule {
}
