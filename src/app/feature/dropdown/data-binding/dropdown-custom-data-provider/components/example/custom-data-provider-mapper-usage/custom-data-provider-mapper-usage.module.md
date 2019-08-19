import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DropdownModule, DropdownResourceModule } from 'ornamentum';
  
import { CustomDataProviderMapperUsageComponent } from './custom-data-provider-mapper-usage.component';

@NgModule({
 bootstrap: [CustomDataProviderMapperUsageComponent],
 declarations: [CustomDataProviderMapperUsageComponent],
 imports: [
    BrowserModule, 
    HttpClientModule, // Import http client module which is required for server side basic data binding
    DropdownModule.forRoot(), // Import dropdown module
    DropdownResourceModule.forRoot() // Import dropdown resource module
  ]
})
export class CustomDataProviderMapperUsageModule {}
