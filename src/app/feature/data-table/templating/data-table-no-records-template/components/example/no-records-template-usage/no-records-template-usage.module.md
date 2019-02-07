import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { NoRecordsTemplateUsageComponent } from './no-records-template-usage.component';

@NgModule({
 bootstrap: [NoRecordsTemplateUsageComponent],
 declarations: [NoRecordsTemplateUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class NoRecordsTemplateUsageModule {
}
