import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfMinWidthUsageComponent } from './responsive-conf-min-width-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfMinWidthUsageComponent],
 declarations: [ResponsiveConfMinWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfMinWidthUsageModule {
}
