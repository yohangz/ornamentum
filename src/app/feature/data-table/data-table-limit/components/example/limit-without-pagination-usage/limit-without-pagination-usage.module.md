import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LimitWithoutPaginationUsageComponent } from './limit-without-pagination-usage.component';

@NgModule({
 bootstrap: [LimitWithoutPaginationUsageComponent],
 declarations: [LimitWithoutPaginationUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class LimitWithoutPaginationUsageModule {
}
