import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideRealTimeDataBindingComponent } from './server-side-real-time-data-binding.component';

@NgModule({
 bootstrap: [ServerSideRealTimeDataBindingComponent],
 declarations: [ServerSideRealTimeDataBindingComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ServerSideRealTimeDataBindingModule {
}
