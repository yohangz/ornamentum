import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { RowGroupingUsageComponent } from './row-grouping-usage.component';

@NgModule({
 bootstrap: [RowGroupingUsageComponent],
 declarations: [RowGroupingUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class RowGroupingUsageModule {
}
