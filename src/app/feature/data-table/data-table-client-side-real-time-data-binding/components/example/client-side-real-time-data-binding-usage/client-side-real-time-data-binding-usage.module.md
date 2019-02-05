import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ClientSideRealTimeDataBindingUsageComponent } from './client-side-real-time-data-binding-usage.component';

@NgModule({
 bootstrap: [ClientSideRealTimeDataBindingUsageComponent],
 declarations: [ClientSideRealTimeDataBindingUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ClientSideRealTimeDataBindingUsageModule {
}
