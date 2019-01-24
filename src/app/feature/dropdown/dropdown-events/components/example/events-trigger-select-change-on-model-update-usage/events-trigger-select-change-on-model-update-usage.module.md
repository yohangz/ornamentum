import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
  
import { DropdownModule } from 'ornamentum';
  
import { EventsTriggerSelectChangeOnModelUpdateUsageComponent } from './events-trigger-select-change-on-model-update-usage.component';

@NgModule({
 bootstrap: [EventsTriggerSelectChangeOnModelUpdateUsageComponent],
 declarations: [EventsTriggerSelectChangeOnModelUpdateUsageComponent],
 imports: [
    BrowserModule,
    FormsModule, 
    DropdownModule.forRoot()
  ]
})
export class EventsTriggerSelectChangeOnModelUpdateUsageModule {
}
