import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsUsageComponent } from './events-usage.component';

@NgModule({
 bootstrap: [EventsUsageComponent],
 declarations: [EventsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsUsageModule {
}
