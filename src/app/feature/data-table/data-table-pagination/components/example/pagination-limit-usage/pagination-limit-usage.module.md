import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { PaginationPageUsageComponent } from './pagination-page-usage.component';

@NgModule({
 bootstrap: [PaginationLimitUsageComponent],
 declarations: [PaginationLimitUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class PaginationLimitUsageModule {
}
