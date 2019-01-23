import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsSelectChangeUsageComponent } from './events-select-change-usage.component';

@NgModule({
 bootstrap: [EventsSelectChangeUsageComponent],
 declarations: [EventsSelectChangeUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class EventsSelectChangeUsageModule {
}
