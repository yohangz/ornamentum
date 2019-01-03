import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionShowClearSelectionBtnUsageComponent } from './item-selection-show-clear-selection-btn-usage.component';

@NgModule({
 bootstrap: [ItemSelectionShowClearSelectionBtnUsageComponent],
 declarations: [ItemSelectionShowClearSelectionBtnUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class ItemSelectionShowClearSelectionBtnUsageModule {
}
