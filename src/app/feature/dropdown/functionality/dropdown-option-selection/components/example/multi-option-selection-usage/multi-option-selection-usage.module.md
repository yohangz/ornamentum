import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MultiOptionSelectionUsageComponent } from './multi-option-selection-usage.component';

@NgModule({
 bootstrap: [MultiOptionSelectionUsageComponent],
 declarations: [MultiOptionSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class MultiOptionSelectionUsageModule {
}
