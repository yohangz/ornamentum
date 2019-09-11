import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ShowIndexColumnUsageComponent } from './show-index-column-usage.component';

@NgModule({
 bootstrap: [ShowIndexColumnUsageComponent],
 declarations: [ShowIndexColumnUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ShowIndexColumnUsageModule {}
