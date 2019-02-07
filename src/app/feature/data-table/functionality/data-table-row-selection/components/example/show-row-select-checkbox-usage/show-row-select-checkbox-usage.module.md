import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ShowRowSelectCheckboxUsageComponent } from './show-row-select-checkbox-usage.component';

@NgModule({
 bootstrap: [ShowRowSelectCheckboxUsageComponent],
 declarations: [ShowRowSelectCheckboxUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ShowRowSelectCheckboxUsageModule {
}
