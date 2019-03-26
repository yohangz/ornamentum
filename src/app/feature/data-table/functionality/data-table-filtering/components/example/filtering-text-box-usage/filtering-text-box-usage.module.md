import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { FilteringTextBoxUsageComponent } from './filtering-text-box-usage.component';

@NgModule({
 bootstrap: [FilteringTextBoxUsageComponent],
 declarations: [FilteringTextBoxUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
   ]
})
export class FilteringTextBoxUsageModule {
}
