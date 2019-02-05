import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { TriggerSelectChangeOnFirstOptionSelectUsageComponent } from './trigger-select-change-on-first-option-select-usage.component';

@NgModule({
 bootstrap: [TriggerSelectChangeOnFirstOptionSelectUsageComponent],
 declarations: [TriggerSelectChangeOnFirstOptionSelectUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class TriggerSelectChangeOnFirstOptionSelectUsageModule {
}
