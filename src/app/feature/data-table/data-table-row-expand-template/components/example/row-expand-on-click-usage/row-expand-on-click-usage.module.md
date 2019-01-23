import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { RowExpandOnClickUsageComponent } from './row-expand-template-usage.component';

@NgModule({
 bootstrap: [RowExpandOnClickUsageComponent],
 declarations: [RowExpandOnClickUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class RowExpandOnClickUsageModule {
}
