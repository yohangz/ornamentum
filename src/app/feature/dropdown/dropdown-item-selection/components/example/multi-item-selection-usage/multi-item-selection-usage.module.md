import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MultiItemSelectionUsageComponent } from './multi-item-selection-usage.component';

@NgModule({
 bootstrap: [MultiItemSelectionUsageComponent],
 declarations: [MultiItemSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class MultiItemSelectionUsageModule {
}
