import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { FilterTextBoxUsageComponent } from './filter-text-box-usage.component';

@NgModule({
 bootstrap: [FilterTextBoxUsageComponent],
 declarations: [FilterTextBoxUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class FilterTextBoxUsageModule {
}
