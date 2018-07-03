import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LimitWithPaginationUsageComponent } from './limit-with-pagination-usage.component';

@NgModule({
 bootstrap: [LimitWithPaginationUsageComponent],
 declarations: [LimitWithPaginationUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class LimitWithPaginationUsageModule {
}
