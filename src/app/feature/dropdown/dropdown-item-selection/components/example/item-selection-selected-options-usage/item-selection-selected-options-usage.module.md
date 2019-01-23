import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionSelectedOptionsUsageComponent } from './item-selection-selected-options-usage.component';

@NgModule({
 bootstrap: [ItemSelectionSelectedOptionsUsageComponent],
 declarations: [ItemSelectionSelectedOptionsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemSelectionSelectedOptionsUsageModule {
}
