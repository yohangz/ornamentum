import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LoadingSpinnerTemplateStylishUsageComponent } from './loading-spinner-template-stylish-usage.component';

@NgModule({
 bootstrap: [LoadingSpinnerTemplateStylishUsageComponent],
 declarations: [LoadingSpinnerTemplateStylishUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class LoadingSpinnerTemplateStylishUsageModule {
}
