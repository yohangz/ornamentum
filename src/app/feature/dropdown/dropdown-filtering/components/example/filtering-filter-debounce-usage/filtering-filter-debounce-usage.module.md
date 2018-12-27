import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilteringFilterDebounceUsageComponent } from './filtering-filter-debounce-usage.component';

@NgModule({
 bootstrap: [FilteringFilterDebounceUsageComponent],
 declarations: [FilteringFilterDebounceUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class FilteringFilterDebounceUsageModule {
}
