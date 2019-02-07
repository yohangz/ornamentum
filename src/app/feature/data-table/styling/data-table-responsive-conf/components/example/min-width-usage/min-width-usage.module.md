import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MinWidthUsageComponent } from './min-width-usage.component';

@NgModule({
 bootstrap: [MinWidthUsageComponent],
 declarations: [MinWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class MinWidthUsageModule {
}
