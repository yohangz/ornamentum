import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsPaginationUsageComponent } from './translations-pagination-usage.component';

@NgModule({
 bootstrap: [TranslationsPaginationUsageComponent],
 declarations: [TranslationsPaginationUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class TranslationsPaginationUsageModule {
}
