import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsSelectedItemWrapPlaceholderUsageComponent } from './translations-selected-item-wrap-placeholder-usage.component';

@NgModule({
 bootstrap: [TranslationsSelectedItemWrapPlaceholderUsageComponent],
 declarations: [TranslationsSelectedItemWrapPlaceholderUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class TranslationsSelectedItemWrapPlaceholderUsageModule {
}
