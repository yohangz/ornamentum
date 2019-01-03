import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsHeaderClickUsageComponent } from './events-header-click-usage.component';

@NgModule({
 bootstrap: [EventsHeaderClickUsageComponent],
 declarations: [EventsHeaderClickUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsHeaderClickUsageModule {
}
