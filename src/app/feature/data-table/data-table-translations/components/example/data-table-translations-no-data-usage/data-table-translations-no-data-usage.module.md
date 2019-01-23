import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataTableTranslationsNoDataUsageComponent } from './data-table-translations-no-data-usage.component';

@NgModule({
 bootstrap: [DataTableTranslationsNoDataUsageComponent],
 declarations: [DataTableTranslationsNoDataUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class DataTableTranslationsNoDataUsageModule {
}
