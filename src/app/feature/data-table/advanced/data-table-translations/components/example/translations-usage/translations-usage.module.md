import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { TranslationsUsageComponent } from './translations-usage.component';

@NgModule({
 bootstrap: [TranslationsUsageComponent],
 declarations: [TranslationsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class TranslationsUsageModule {
}
