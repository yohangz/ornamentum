import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilterTextUsageComponent } from './filter-text-usage.component';

@NgModule({
 bootstrap: [FilterTextUsageComponent],
 declarations: [FilterTextUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class FilterTextUsageModule {
}
