import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ShowRowSelectAllCheckboxUsageComponent } from './show-row-select-all-checkbox-usage.component';

@NgModule({
 bootstrap: [ShowRowSelectAllCheckboxUsageComponent],
 declarations: [ShowRowSelectAllCheckboxUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ShowRowSelectAllCheckboxUsageModule {
}
