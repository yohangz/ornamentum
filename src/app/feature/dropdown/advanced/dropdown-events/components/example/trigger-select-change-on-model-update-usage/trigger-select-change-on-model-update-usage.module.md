import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
  
import { DropdownModule } from 'ornamentum';
  
import { TriggerSelectChangeOnModelUpdateUsageComponent } from './trigger-select-change-on-model-update-usage.component';

@NgModule({
 bootstrap: [TriggerSelectChangeOnModelUpdateUsageComponent],
 declarations: [TriggerSelectChangeOnModelUpdateUsageComponent],
 imports: [
    BrowserModule,
    FormsModule, 
    DropdownModule.forRoot()
  ]
})
export class TriggerSelectChangeOnModelUpdateUsageModule {
}
