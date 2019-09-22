import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SingleOptionSelectionUsageComponent } from './single-option-selection-usage.component';

@NgModule({
 bootstrap: [SingleOptionSelectionUsageComponent],
 declarations: [SingleOptionSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SingleOptionSelectionUsageModule {
}
