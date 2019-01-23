import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { AdditionalTranslationsUsageComponent } from './additional-translations-usage.component';

@NgModule({
 bootstrap: [AdditionalTranslationsUsageComponent],
 declarations: [AdditionalTranslationsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class AdditionalTranslationsUsageModule {
}
