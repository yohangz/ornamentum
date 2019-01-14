import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsTriggerSelectChangeOnInitUsageComponent } from './events-trigger-select-change-on-init-usage.component';

@NgModule({
 bootstrap: [EventsTriggerSelectChangeOnInitUsageComponent],
 declarations: [EventsTriggerSelectChangeOnInitUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class EventsTriggerSelectChangeOnInitUsageModule {
}
