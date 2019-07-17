import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';
  
import { ColumnSelectorWidthUsageComponent } from './column-selector-width-usage.component';

@NgModule({
 bootstrap: [ColumnSelectorWidthUsageComponent],
 declarations: [ColumnSelectorWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ColumnSelectorWidthUsageModule {
}
