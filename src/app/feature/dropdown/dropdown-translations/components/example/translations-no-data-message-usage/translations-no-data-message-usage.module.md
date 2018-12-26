import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsNoDataMessageUsageComponent } from './translations-no-data-message-usage.component';

@NgModule({
 bootstrap: [TranslationsNoDataMessageUsageComponent],
 declarations: [TranslationsNoDataMessageUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class TranslationsNoDataMessageUsageModule {
}
