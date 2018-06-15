import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { AdditionalTranslationsUsageComponent } from './additional-translations-usage.component';

@NgModule({
 bootstrap: [AdditionalTranslationsUsageComponent],
 declarations: [AdditionalTranslationsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class AdditionalTranslationsUsageModule {
}
