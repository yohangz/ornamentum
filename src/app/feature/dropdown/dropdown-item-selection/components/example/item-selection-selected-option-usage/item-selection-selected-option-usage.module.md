import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionSelectedOptionUsageComponent } from './item-selection-selected-option-usage.component';

@NgModule({
 bootstrap: [ItemSelectionSelectedOptionUsageComponent],
 declarations: [ItemSelectionSelectedOptionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemSelectionSelectedOptionUsageModule {
}
