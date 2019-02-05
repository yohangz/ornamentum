import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LoadingSpinnerTemplateUsageComponent } from './loading-spinner-template-usage.component';

@NgModule({
 bootstrap: [LoadingSpinnerTemplateUsageComponent],
 declarations: [LoadingSpinnerTemplateUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class LoadingSpinnerTemplateUsageModule {
}
