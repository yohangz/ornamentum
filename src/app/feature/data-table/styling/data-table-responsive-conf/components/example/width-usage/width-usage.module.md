import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { WidthUsageComponent } from './width-usage.component';

@NgModule({
 bootstrap: [WidthUsageComponent],
 declarations: [WidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class WidthUsageModule {
}
