import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { WithoutLimitAndPaginationUsageComponent } from './without-limit-and-pagination-usage.component';

@NgModule({
 bootstrap: [WithoutLimitAndPaginationUsageComponent],
 declarations: [WithoutLimitAndPaginationUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class WithoutLimitAndPaginationUsageModule {
}
