import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilterDebounceUsageComponent } from './filter-debounce-usage.component';

@NgModule({
 bootstrap: [FilterDebounceUsageComponent],
 declarations: [FilterDebounceUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class FilterDebounceUsageModule {
}
