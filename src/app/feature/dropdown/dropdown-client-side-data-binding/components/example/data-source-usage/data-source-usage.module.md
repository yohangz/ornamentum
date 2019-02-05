import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { DataSourceUsageComponent } from './data-source-usage.component';

@NgModule({
 bootstrap: [DataSourceUsageComponent],
 declarations: [DataSourceUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DataSourceUsageModule {
}
