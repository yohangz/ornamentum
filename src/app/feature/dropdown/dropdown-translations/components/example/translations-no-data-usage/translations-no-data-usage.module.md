import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsNoDataUsageComponent } from './translations-no-data-usage.component';

@NgModule({
 bootstrap: [TranslationsNoDataUsageComponent],
 declarations: [TranslationsNoDataUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class TranslationsNoDataUsageModule {
}
