import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { DataLimitUsageComponent } from './data-limit-usage.component';

@NgModule({
 bootstrap: [DataLimitUsageComponent],
 declarations: [DataLimitUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DataLimitUsageModule {
}
