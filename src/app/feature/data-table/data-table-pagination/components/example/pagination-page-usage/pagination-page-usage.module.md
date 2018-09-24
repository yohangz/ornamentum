import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { PaginationPageUsageComponent } from './pagination-page-usage.component';

@NgModule({
 bootstrap: [PaginationPageUsageComponent],
 declarations: [PaginationPageUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class PaginationPageUsageModule {
}
