import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilteringFilterTextUsageComponent } from './filtering-filter-text-usage.component';

@NgModule({
 bootstrap: [FilteringFilterTextUsageComponent],
 declarations: [FilteringFilterTextUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class FilteringFilterTextUsageModule {
}
