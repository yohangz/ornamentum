import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { TranslationsSelectedItemWrapPlaceholderUsageComponent } from './translations-selected-item-wrap-placeholder-usage.component';

@NgModule({
 bootstrap: [TranslationsSelectedItemWrapPlaceholderUsageComponent],
 declarations: [TranslationsSelectedItemWrapPlaceholderUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class TranslationsSelectedItemWrapPlaceholderUsageModule {
}
