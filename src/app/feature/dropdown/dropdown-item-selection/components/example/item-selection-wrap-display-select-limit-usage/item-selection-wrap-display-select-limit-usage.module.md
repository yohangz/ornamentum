import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionWrapDisplaySelectLimitUsageComponent } from './item-selection-wrap-display-select-limit-usage.component';

@NgModule({
 bootstrap: [ItemSelectionWrapDisplaySelectLimitUsageComponent],
 declarations: [ItemSelectionWrapDisplaySelectLimitUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class ItemSelectionWrapDisplaySelectLimitUsageModule {
}
