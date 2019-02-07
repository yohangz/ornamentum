import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnFilteringDropdownUsageComponent } from './column-filtering-dropdown-usage.component';

@NgModule({
 bootstrap: [ColumnFilteringDropdownUsageComponent],
 declarations: [ColumnFilteringDropdownUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ColumnFilteringDropdownUsageModule {
}
