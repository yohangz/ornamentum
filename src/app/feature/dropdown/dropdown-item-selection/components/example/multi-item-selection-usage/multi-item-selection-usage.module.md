import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MultiItemSelectionUsageComponent } from './multi-item-selection-usage.component';

@NgModule({
 bootstrap: [MultiItemSelectionUsageComponent],
 declarations: [MultiItemSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class MultiItemSelectionUsageModule {
}
