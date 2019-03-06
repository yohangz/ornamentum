import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataSourceUsageComponent } from './data-source-usage.component';

@NgModule({
 bootstrap: [DataSourceUsageComponent],
 declarations: [DataSourceUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot() // import data table module
  ]
})
export class DataSourceUsageModule {
}
