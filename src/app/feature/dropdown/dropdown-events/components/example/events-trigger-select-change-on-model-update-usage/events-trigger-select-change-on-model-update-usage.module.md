import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsTriggerSelectChangeOnModelUpdateUsageComponent } from './events-trigger-select-change-on-model-update-usage.component';

@NgModule({
 bootstrap: [EventsTriggerSelectChangeOnModelUpdateUsageComponent],
 declarations: [EventsTriggerSelectChangeOnModelUpdateUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class EventsTriggerSelectChangeOnModelUpdateUsageModule {
}
