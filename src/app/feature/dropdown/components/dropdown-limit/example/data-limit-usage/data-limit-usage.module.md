import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataLimitUsageComponent } from './data-limit-usage.component';

@NgModule({
 bootstrap: [DataLimitUsageComponent],
 declarations: [DataLimitUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class DataLimitUsageModule {
}
