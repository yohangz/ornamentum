import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ItemSelectionWithAllOptionsUsageComponent } from './item-selection-with-all-options-usage.component';

@NgModule({
 bootstrap: [ItemSelectionWithAllOptionsUsageComponent],
 declarations: [ItemSelectionWithAllOptionsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ItemSelectionWithAllOptionsUsageModule {
}
