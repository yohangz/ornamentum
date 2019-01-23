import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SelectedRowsUsageComponent } from './selected-rows-usage.component';

@NgModule({
 bootstrap: [SelectedRowsUsageComponent],
 declarations: [SelectedRowsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SelectedRowsUsageModule {
}
