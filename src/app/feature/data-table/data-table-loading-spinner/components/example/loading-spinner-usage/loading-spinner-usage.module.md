import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LoadingSpinnerUsageComponent } from './loading-spinner-usage.component';

@NgModule({
 bootstrap: [LoadingSpinnerUsageComponent],
 declarations: [LoadingSpinnerUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class LoadingSpinnerUsageModule {
}
