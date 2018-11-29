import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { RowExpandTemplateUsageComponent } from './row-expand-template-usage.component';

@NgModule({
 bootstrap: [RowExpandTemplateUsageComponent],
 declarations: [RowExpandTemplateUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class RowExpandTemplateUsageModule {
}
