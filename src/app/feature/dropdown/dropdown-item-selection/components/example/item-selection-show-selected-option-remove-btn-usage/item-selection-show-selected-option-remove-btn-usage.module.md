import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionShowSelectedOptionRemoveBtnUsageComponent } from './item-selection-show-selected-option-remove-btn-usage.component';

@NgModule({
 bootstrap: [ItemSelectionShowSelectedOptionRemoveBtnUsageComponent],
 declarations: [ItemSelectionShowSelectedOptionRemoveBtnUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemSelectionShowSelectedOptionRemoveBtnUsageModule {
}
