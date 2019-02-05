import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { IndexColumnWidthUsageComponent } from './index-column-width-usage.component';

@NgModule({
 bootstrap: [IndexColumnWidthUsageComponent],
 declarations: [IndexColumnWidthUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class IndexColumnWidthUsageModule {
}
