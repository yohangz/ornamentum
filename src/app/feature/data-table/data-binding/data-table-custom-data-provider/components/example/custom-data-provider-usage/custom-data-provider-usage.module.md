import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { DataTableModule, DataTableResourceModule } from 'ornamentum';
  
import { CustomDataProviderUsageComponent } from './custom-data-provider-usage.component';

@NgModule({
 bootstrap: [CustomDataProviderUsageComponent],
 declarations: [CustomDataProviderUsageComponent],
 imports: [
    BrowserModule, 
    HttpClientModule, // Import http client module which is required for server side basic data binding
    DataTableModule.forRoot(), // Import data table module
    DataTableResourceModule.forRoot() // Import data table resource module
  ]
})
export class CustomDataProviderUsageModule {}
