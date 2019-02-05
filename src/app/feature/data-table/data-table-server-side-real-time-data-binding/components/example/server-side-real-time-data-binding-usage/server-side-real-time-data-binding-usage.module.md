import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideRealTimeDataBindingComponent } from './server-side-real-time-data-binding-usage.component';

@NgModule({
 bootstrap: [ServerSideRealTimeDataBindingUsageComponent],
 declarations: [ServerSideRealTimeDataBindingUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ServerSideRealTimeDataBindingUsageModule {
}
