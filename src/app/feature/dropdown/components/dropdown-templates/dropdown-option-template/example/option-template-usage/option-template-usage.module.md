import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { OptionTemplateUsageComponent } from './option-template-usage.component';

@NgModule({
 bootstrap: [OptionTemplateUsageComponent],
 declarations: [OptionTemplateUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class OptionTemplateUsageModule {
}
