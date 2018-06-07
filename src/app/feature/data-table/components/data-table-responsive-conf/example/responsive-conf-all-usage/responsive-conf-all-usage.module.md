import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ResponsiveConfAllUsageComponent } from './responsive-conf-all-usage.component';

@NgModule({
 bootstrap: [ResponsiveConfAllUsageComponent],
 declarations: [ResponsiveConfAllUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ResponsiveConfAllUsageModule {
}
