import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SetSelectedRowUsageComponent } from './set-selected-row-usage.component';

@NgModule({
 bootstrap: [SetSelectedRowUsageComponent],
 declarations: [SetSelectedRowUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SetSelectedRowUsageModule {
}
