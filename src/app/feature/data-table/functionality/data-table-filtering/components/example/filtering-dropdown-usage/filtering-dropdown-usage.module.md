import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { FilteringDropdownUsageComponent } from './filtering-dropdown-usage.component';

@NgModule({
 bootstrap: [FilteringDropdownUsageComponent],
 declarations: [FilteringDropdownUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class FilteringDropdownUsageModule {
}
