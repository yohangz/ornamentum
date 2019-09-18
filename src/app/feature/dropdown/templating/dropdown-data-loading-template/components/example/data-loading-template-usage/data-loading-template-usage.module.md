import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { DataLoadingTemplateUsageComponent } from './data-loading-template-usage.component';

@NgModule({
 bootstrap: [DataLoadingTemplateUsageComponent],
 declarations: [DataLoadingTemplateUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DataLoadingTemplateUsageModule {
}
