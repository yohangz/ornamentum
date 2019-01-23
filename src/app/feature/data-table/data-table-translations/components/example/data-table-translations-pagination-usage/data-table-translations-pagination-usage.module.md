import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataTableTranslationsPaginationUsageComponent } from './data-table-translations-pagination-usage.component';

@NgModule({
 bootstrap: [DataTableTranslationsPaginationUsageComponent],
 declarations: [DataTableTranslationsPaginationUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class DataTableTranslationsPaginationUsageModule {
}
