import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionShowOptionSelectCheckboxUsageComponent } from './item-selection-show-option-select-checkbox-usage.component';

@NgModule({
 bootstrap: [ItemSelectionShowOptionSelectCheckboxUsageComponent],
 declarations: [ItemSelectionShowOptionSelectCheckboxUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemSelectionShowOptionSelectCheckboxUsageModule {
}
