import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemSelectionUsageComponent } from './item-selection-usage.component';

@NgModule({
 bootstrap: [ItemSelectionUsageComponent],
 declarations: [ItemSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemSelectionUsageModule {
}
