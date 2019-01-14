import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsInitUsageComponent } from './events-init-usage.component';

@NgModule({
 bootstrap: [EventsInitUsageComponent],
 declarations: [EventsInitUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class EventsInitUsageModule {
}
