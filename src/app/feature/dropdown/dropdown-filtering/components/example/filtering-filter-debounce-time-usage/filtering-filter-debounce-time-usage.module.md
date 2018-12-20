import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { FilteringFilterDebounceTimeUsageComponent } from './filtering-filter-debounce-time-usage.component';

@NgModule({
 bootstrap: [FilteringFilterDebounceTimeUsageComponent],
 declarations: [FilteringFilterDebounceTimeUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class FilteringFilterDebounceTimeUsageModule {
}
