import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsDataBoundUsageComponent } from './events-data-bound-usage.component';

@NgModule({
 bootstrap: [EventsDataBoundUsageComponent],
 declarations: [EventsDataBoundUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class EventsDataBoundUsageModule {
}
