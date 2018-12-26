import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsFilterPlaceholderUsageComponent } from './translations-filter-placeholder-usage.component';

@NgModule({
 bootstrap: [TranslationsFilterPlaceholderUsageComponent],
 declarations: [TranslationsFilterPlaceholderUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class TranslationsFilterPlaceholderUsageModule {
}
