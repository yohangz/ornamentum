import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionDisablingUsageComponent } from './option-disabling-usage.component';

@NgModule({
 bootstrap: [OptionDisablingUsageComponent],
 declarations: [OptionDisablingUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class optionDisablingUsageModule {
}
