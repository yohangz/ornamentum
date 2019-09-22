import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionSelectionUsageComponent } from './option-selection-usage.component';

@NgModule({
 bootstrap: [OptionSelectionUsageComponent],
 declarations: [OptionSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class OptionSelectionUsageModule {
}
