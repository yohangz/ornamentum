import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnFilteringTextBoxUsageComponent } from './column-filtering-text-box-usage.component';

@NgModule({
 bootstrap: [ColumnFilteringTextBoxUsageComponent],
 declarations: [ColumnFilteringTextBoxUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
   ]
})
export class ColumnFilteringTextBoxUsageModule {
}
