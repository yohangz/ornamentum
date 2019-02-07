import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SetSelectedRowsUsageComponent } from './set-selected-rows-usage.component';

@NgModule({
 bootstrap: [SetSelectedRowsUsageComponent],
 declarations: [SetSelectedRowsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SetSelectedRowsUsageModule {
}
