import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsTriggerSelectChangeOnFirstOptionSelectUsageComponent } from './events-trigger-select-change-on-first-option-select-usage.component';

@NgModule({
 bootstrap: [EventsTriggerSelectChangeOnFirstOptionSelectUsageComponent],
 declarations: [EventsTriggerSelectChangeOnFirstOptionSelectUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class EventsTriggerSelectChangeOnFirstOptionSelectUsageModule {
}
