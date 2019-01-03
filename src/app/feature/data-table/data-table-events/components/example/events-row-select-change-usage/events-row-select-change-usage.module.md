import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsRowSelectChangeUsageComponent } from './events-row-select-change-usage.component';

@NgModule({
 bootstrap: [EventsRowSelectChangeUsageComponent],
 declarations: [EventsRowSelectChangeUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsRowSelectChangeUsageModule {
}
