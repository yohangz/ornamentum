import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsSelectPlaceholderUsageComponent } from './translations-select-placeholder-usage.component.component';

@NgModule({
 bootstrap: [TranslationsSelectPlaceholderUsageComponent],
 declarations: [TranslationsSelectPlaceholderUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class TranslationsSelectPlaceholderUsageModule {
}
