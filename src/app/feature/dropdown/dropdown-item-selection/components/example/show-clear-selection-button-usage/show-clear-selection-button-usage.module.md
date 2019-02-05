import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ShowClearSelectionButtonUsageComponent } from './show-clear-selection-button-usage.component';

@NgModule({
 bootstrap: [ShowClearSelectionButtonUsageComponent],
 declarations: [ShowClearSelectionButtonUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ShowClearSelectionButtonUsageModule {
}
