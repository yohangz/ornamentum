import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ClientSideRealTimeDataBindingComponent } from './client-side-real-time-data-binding.component';

@NgModule({
 bootstrap: [ClientSideRealTimeDataBindingComponent],
 declarations: [ClientSideRealTimeDataBindingComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ClientSideRealTimeDataBindingModule {
}
