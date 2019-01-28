import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfSelectionColumnWidthUsageComponent } from './responsive-conf-selection-column-width-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfSelectionColumnWidthUsageComponent],
 declarations: [ResponsiveConfSelectionColumnWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ResponsiveConfSelectionColumnWidthUsageModule {
}
