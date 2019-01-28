import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfIndexColumnWidthUsageComponent } from './responsive-conf-index-column-width-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfIndexColumnWidthUsageComponent],
 declarations: [ResponsiveConfIndexColumnWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfIndexColumnWidthUsageModule {
}
