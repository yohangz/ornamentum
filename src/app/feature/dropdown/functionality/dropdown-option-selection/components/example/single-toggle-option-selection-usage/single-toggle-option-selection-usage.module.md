import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SingleToggleOptionSelectionUsageComponent } from './single-toggle-option-selection-usage.component';

@NgModule({
 bootstrap: [SingleToggleOptionSelectionUsageComponent],
 declarations: [SingleToggleOptionSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SingleToggleOptionSelectionUsageModule {
}
