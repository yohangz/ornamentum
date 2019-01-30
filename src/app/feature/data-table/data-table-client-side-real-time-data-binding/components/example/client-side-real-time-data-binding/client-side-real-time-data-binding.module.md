import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ClientSideRealTimeDataBindingComponent } from './client-side-real-time-data-binding.component';

@NgModule({
 bootstrap: [ClientSideRealTimeDataBindingComponent],
 declarations: [ClientSideRealTimeDataBindingComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ClientSideRealTimeDataBindingModule {
}
