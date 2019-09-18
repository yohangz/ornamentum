import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataLoadingTemplateUsageComponent } from './data-loading-template-usage.component';

@NgModule({
 bootstrap: [DataLoadingTemplateUsageComponent],
 declarations: [DataLoadingTemplateUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class DataLoadingTemplateUsageModule {
}
