import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SingleToggleItemSelectionUsageComponent } from './single-toggle-item-selection-usage.component';

@NgModule({
 bootstrap: [SingleToggleItemSelectionUsageComponent],
 declarations: [SingleToggleItemSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class SingleToggleItemSelectionUsageModule {
}
