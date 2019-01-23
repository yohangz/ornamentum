import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { RowExpandLoadingSpinnerUsageComponent } from './row-expand-template-usage.component';

@NgModule({
 bootstrap: [RowExpandLoadingSpinnerUsageComponent],
 declarations: [RowExpandLoadingSpinnerUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class RowExpandLoadingSpinnerUsageModule {
}
