import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataLoadingSpinnerUsageComponent } from './data-loading-spinner-usage.component';

@NgModule({
 bootstrap: [DataLoadingSpinnerUsageComponent],
 declarations: [DataLoadingSpinnerUsageComponent],
 imports: [
    BrowserModule,
    DataTableModule.forRoot()
  ]
})
export class DataLoadingSpinnerUsageModule {
}
