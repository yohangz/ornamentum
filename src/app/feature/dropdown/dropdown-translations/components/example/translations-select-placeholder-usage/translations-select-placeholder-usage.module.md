import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { TranslationsSelectPlaceholderUsageComponent } from './translations-select-placeholder-usage.component.component';

@NgModule({
 bootstrap: [TranslationsSelectPlaceholderUsageComponent],
 declarations: [TranslationsSelectPlaceholderUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class TranslationsSelectPlaceholderUsageModule {
}
