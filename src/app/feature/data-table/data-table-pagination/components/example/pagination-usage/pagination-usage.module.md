import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { PaginationUsageComponent } from './pagination-usage.component';

@NgModule({
 bootstrap: [PaginationUsageComponent],
 declarations: [PaginationUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class PaginationUsageModule {
}
