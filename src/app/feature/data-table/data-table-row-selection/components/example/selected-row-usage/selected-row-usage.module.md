import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SelectedRowUsageComponent } from './selected-row-usage.component';

@NgModule({
 bootstrap: [SelectedRowUsageComponent],
 declarations: [SelectedRowUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SelectedRowUsageModule {
}
