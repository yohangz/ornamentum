import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnBindingUsageComponent } from './column-binding-usage.component';

@NgModule({
 bootstrap: [ColumnBindingUsageComponent],
 declarations: [ColumnBindingUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ColumnBindingUsageModule {}
