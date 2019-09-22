import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { TranslationsSelectedOptionWrapPlaceholderUsageComponent } from './translations-selected-option-wrap-placeholder-usage.component';

@NgModule({
 bootstrap: [TranslationsSelectedOptionWrapPlaceholderUsageComponent],
 declarations: [TranslationsSelectedOptionWrapPlaceholderUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class TranslationsSelectedOptionWrapPlaceholderUsageModule {
}
