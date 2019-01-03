import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionSetFirstOptionSelectedUsageComponent } from './item-selection-set-first-option-selected-usage.component';

@NgModule({
 bootstrap: [ItemSelectionSetFirstOptionSelectedUsageComponent],
 declarations: [ItemSelectionSetFirstOptionSelectedUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class ItemSelectionSetFirstOptionSelectedUsageModule {
}
