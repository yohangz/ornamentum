import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MinContentWidthUsageComponent } from './min-content-width-usage.component';

@NgModule({
 bootstrap: [MinContentWidthUsageComponent],
 declarations: [MinContentWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class MinContentWidthUsageModule {
}
