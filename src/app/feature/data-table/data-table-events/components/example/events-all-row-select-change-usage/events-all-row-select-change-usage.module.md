import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsAllRowSelectChangeUsageComponent } from './events-all-row-select-change-usage.component';

@NgModule({
 bootstrap: [EventsAllRowSelectChangeUsageComponent],
 declarations: [EventsAllRowSelectChangeUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsAllRowSelectChangeUsageModule {
}
