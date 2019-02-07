import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsInitUsageComponent } from './events-init-usage.component';

@NgModule({
 bootstrap: [EventsInitUsageComponent],
 declarations: [EventsInitUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class EventsInitUsageModule {
}
