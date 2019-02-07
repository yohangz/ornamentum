import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnFilteringUsageComponent } from './column-filtering-usage.component';

@NgModule({
 bootstrap: [ColumnFilteringUsageComponent],
 declarations: [ColumnFilteringUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
   ]
})
export class ColumnFilteringUsageModule {
}
