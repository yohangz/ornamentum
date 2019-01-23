import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { FilterDropdownUsageComponent } from './filter-dropdown-usage.component';

@NgModule({
 bootstrap: [FilterDropdownUsageComponent],
 declarations: [FilterDropdownUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class FilterDropdownUsageModule {
}
