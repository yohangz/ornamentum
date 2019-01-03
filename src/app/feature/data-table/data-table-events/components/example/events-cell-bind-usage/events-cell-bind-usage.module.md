import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { EventsCellBindUsageComponent } from './events-cell-bind-usage.component';

@NgModule({
 bootstrap: [EventsCellBindUsageComponent],
 declarations: [EventsCellBindUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class EventsCellBindUsageModule {
}
