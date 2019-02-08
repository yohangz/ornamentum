import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { TranslationsFilterPlaceholderUsageComponent } from './translations-filter-placeholder-usage.component';

@NgModule({
 bootstrap: [TranslationsFilterPlaceholderUsageComponent],
 declarations: [TranslationsFilterPlaceholderUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class TranslationsFilterPlaceholderUsageModule {
}
