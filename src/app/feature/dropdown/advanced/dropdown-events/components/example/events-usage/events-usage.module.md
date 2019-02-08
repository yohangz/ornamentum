import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsUsageComponent } from './events-usage.component';

@NgModule({
 bootstrap: [EventsUsageComponent],
 declarations: [EventsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class EventsUsageModule {
}
