import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsRowDoubleClickUsageComponent } from './events-row-double-click-usage.component';

@NgModule({
 bootstrap: [EventsRowDoubleClickUsageComponent],
 declarations: [EventsRowDoubleClickUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsRowDoubleClickUsageModule {
}
