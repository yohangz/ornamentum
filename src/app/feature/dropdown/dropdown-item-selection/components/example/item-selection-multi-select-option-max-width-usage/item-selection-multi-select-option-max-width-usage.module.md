import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionMultiSelectOptionMaxWidthUsageComponent } from './item-selection-multi-select-option-max-width-usage.component';

@NgModule({
 bootstrap: [ItemSelectionMultiSelectOptionMaxWidthUsageComponent],
 declarations: [ItemSelectionMultiSelectOptionMaxWidthUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class ItemSelectionMultiSelectOptionMaxWidthUsageModule {
}
