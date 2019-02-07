import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule, DataTableResourceModule } from 'ornamentum';
  
import { HeaderDetailsUsageComponent } from './header-details-usage.component';

@NgModule({
 bootstrap: [HeaderDetailsUsageComponent],
 declarations: [HeaderDetailsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot(),
    DataTableResourceModule
  ]
})
export class HeaderDetailsUsageModule {
}
