import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsRowClickUsageComponent } from './events-row-click-usage.component';

@NgModule({
 bootstrap: [EventsRowClickUsageComponent],
 declarations: [EventsRowClickUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsRowClickUsageModule {
}
