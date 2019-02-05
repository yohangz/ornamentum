import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ExpanderColumnWidthUsageComponent } from './expander-column-width-usage.component';

@NgModule({
 bootstrap: [ExpanderColumnWidthUsageComponent],
 declarations: [ExpanderColumnWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ExpanderColumnWidthUsageModule {
}
