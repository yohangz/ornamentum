import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsColumnBindUsageComponent } from './events-column-bind-usage.component';

@NgModule({
 bootstrap: [EventsColumnBindUsageComponent],
 declarations: [EventsColumnBindUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class EventsColumnBindUsageModule {
}
