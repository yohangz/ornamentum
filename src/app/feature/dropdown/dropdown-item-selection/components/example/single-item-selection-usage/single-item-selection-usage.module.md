import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SingleItemSelectionUsageComponent } from './single-item-selection-usage.component';

@NgModule({
 bootstrap: [SingleItemSelectionUsageComponent],
 declarations: [SingleItemSelectionUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class SingleItemSelectionUsageModule {
}
