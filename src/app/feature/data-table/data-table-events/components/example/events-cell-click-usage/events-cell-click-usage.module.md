import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsCellClickUsageComponent } from './events-cell-click-usage.component';

@NgModule({
 bootstrap: [EventsCellClickUsageComponent],
 declarations: [EventsCellClickUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsCellClickUsageModule {
}
