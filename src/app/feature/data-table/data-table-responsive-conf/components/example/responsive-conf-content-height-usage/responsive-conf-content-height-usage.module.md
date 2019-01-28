import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfAllUsageComponent } from './responsive-conf-content-height-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfContentHeightUsageComponent],
 declarations: [ResponsiveConfContentHeightUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfContentHeightUsageModule {
}
