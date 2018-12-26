import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { RealTimeDataBindingComponent } from './real-time-data-binding.component';

@NgModule({
 bootstrap: [RealTimeDataBindingComponent],
 declarations: [RealTimeDataBindingComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class RealTimeDataBindingModule {
}
