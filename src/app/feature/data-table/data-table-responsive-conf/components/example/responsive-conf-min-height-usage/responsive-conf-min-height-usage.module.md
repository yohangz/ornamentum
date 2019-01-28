import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfMinHeightUsageComponent } from './responsive-conf-min-height-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfMinHeightUsageComponent],
 declarations: [ResponsiveConfMinHeightUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfMinHeightUsageModule {
}
