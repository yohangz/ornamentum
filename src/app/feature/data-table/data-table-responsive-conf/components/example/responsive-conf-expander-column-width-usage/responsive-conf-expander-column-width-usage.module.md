import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfExpanderColumnWidthUsageComponent } from './responsive-conf-expander-column-width-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfExpanderColumnWidthUsageComponent],
 declarations: [ResponsiveConfExpanderColumnWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfExpanderColumnWidthUsageModule {
}
