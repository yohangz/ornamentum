import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ClientSideRealTimeDataBindingComponent } from './client-side-real-time-data-binding-usage.component';

@NgModule({
 bootstrap: [ClientSideRealTimeDataBindingUsageComponent],
 declarations: [ClientSideRealTimeDataBindingUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ClientSideRealTimeDataBindingUsageModule {
}
