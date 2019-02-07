import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LimitUsageComponent } from './limit-usage.component';

@NgModule({
 bootstrap: [LimitUsageComponent],
 declarations: [LimitUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class LimitUsageModule {
}
