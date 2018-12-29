import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataTableTranslationsUsageComponent } from './data-table-translations-usage.component';

@NgModule({
 bootstrap: [DataTableTranslationsUsageComponent],
 declarations: [DataTableTranslationsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class DataTableTranslationsUsageModule {
}
