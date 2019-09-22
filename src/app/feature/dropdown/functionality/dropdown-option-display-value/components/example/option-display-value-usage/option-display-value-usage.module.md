import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionDisplayValueUsageComponent } from './option-display-usage.component';

@NgModule({
 bootstrap: [OptionDisplayValueUsageComponent],
 declarations: [OptionDisplayValueUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class OptionDisplayValueModule {
}
