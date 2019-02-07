import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfUsageComponent } from './responsive-conf-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfUsageComponent],
 declarations: [ResponsiveConfUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfUsageModule {
}
