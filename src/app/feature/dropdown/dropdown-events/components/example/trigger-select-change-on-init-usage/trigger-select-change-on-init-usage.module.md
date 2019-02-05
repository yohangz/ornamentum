import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { TriggerSelectChangeOnInitUsageComponent } from './trigger-select-change-on-init-usage.component';

@NgModule({
 bootstrap: [TriggerSelectChangeOnInitUsageComponent],
 declarations: [TriggerSelectChangeOnInitUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class TriggerSelectChangeOnInitUsageModule {
}
