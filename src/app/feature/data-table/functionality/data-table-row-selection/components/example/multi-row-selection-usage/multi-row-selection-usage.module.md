import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MultiRowSelectionUsageComponent } from './multi-row-selection-usage.component';

@NgModule({
 bootstrap: [MultiRowSelectionUsageComponent],
 declarations: [MultiRowSelectionUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class MultiRowSelectionUsageModule {
}
