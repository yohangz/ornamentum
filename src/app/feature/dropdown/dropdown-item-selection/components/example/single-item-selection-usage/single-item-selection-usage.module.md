import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SingleItemSelectionUsageComponent } from './single-item-selection-usage.component';

@NgModule({
 bootstrap: [SingleItemSelectionUsageComponent],
 declarations: [SingleItemSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class SingleItemSelectionUsageModule {
}
