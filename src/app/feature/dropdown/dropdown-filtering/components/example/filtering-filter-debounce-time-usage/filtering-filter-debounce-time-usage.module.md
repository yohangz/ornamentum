import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilteringFilterDebounceTimeUsageComponent } from './filtering-filter-debounce-time-usage.component';

@NgModule({
 bootstrap: [FilteringFilterDebounceTimeUsageComponent],
 declarations: [FilteringFilterDebounceTimeUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class FilteringFilterDebounceTimeUsageModule {
}
