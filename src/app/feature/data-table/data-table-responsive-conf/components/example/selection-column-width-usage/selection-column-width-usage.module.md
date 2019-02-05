import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SelectionColumnWidthUsageComponent } from './selection-column-width-usage.component';

@NgModule({
 bootstrap: [SelectionColumnWidthUsageComponent],
 declarations: [SelectionColumnWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SelectionColumnWidthUsageModule {
}
