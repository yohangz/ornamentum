import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ServerSideRealTimeDataBindingComponent } from './server-side-real-time-data-binding.component';

@NgModule({
 bootstrap: [ServerSideRealTimeDataBindingComponent],
 declarations: [ServerSideRealTimeDataBindingComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ServerSideRealTimeDataBindingModule {
}
