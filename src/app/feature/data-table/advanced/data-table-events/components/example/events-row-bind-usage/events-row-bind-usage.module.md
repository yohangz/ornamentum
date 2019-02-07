import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsRowBindUsageComponent } from './events-row-bind-usage.component';

@NgModule({
 bootstrap: [EventsRowBindUsageComponent],
 declarations: [EventsRowBindUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class EventsRowBindUsageModule {
}
