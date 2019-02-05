import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SortOrderUsageComponent } from './sort-order-usage.component';

@NgModule({
 bootstrap: [SortOrderUsageComponent],
 declarations: [SortOrderUsageComponent],
 imports: [
    BrowserModule,
    DataTableModule.forRoot()
  ]
})
export class SortOrderUsageModule {
}
