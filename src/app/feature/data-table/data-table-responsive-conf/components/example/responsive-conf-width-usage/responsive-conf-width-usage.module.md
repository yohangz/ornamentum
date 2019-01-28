import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfAllUsageComponent } from './responsive-conf-width-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfWidthUsageComponent],
 declarations: [ResponsiveConfWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfWidthUsageModule {
}
