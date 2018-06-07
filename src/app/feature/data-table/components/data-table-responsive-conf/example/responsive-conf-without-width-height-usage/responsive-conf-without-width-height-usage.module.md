import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfWithoutWidthHeightUsageComponent } from './responsive-conf-without-width-height-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfWithoutWidthHeightUsageComponent],
 declarations: [ResponsiveConfWithoutWidthHeightUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ResponsiveConfWithoutWidthHeightUsageModule {
}
