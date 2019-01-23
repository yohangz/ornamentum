import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TableHeaderDetailsUsageComponent } from './table-header-details-usage.component';

@NgModule({
 bootstrap: [TableHeaderDetailsUsageComponent],
 declarations: [TableHeaderDetailsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class TableHeaderDetailsUsageModule {
}
