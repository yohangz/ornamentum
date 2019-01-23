import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SingleToggleItemSelectionUsageComponent } from './single-toggle-item-selection-usage.component';

@NgModule({
 bootstrap: [SingleToggleItemSelectionUsageComponent],
 declarations: [SingleToggleItemSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SingleToggleItemSelectionUsageModule {
}
