import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { PaginationWithoutLimitUsageComponent } from './pagination-without-limit-usage.component';

@NgModule({
 bootstrap: [PaginationWithoutLimitUsageComponent],
 declarations: [PaginationWithoutLimitUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class PaginationWithoutLimitUsageModule {
}
