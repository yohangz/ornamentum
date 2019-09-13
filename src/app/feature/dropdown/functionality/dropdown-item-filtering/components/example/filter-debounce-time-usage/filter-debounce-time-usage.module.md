import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilterDebounceTimeUsageComponent } from './filter-debounce-time-usage.component';

@NgModule({
 bootstrap: [FilterDebounceTimeUsageComponent],
 declarations: [FilterDebounceTimeUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class FilterDebounceTimeUsageModule {
}
