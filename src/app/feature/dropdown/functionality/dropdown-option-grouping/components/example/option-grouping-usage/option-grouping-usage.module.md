import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionGroupingUsageComponent } from './option-grouping-usage.component';

@NgModule({
 bootstrap: [OptionGroupingUsageComponent],
 declarations: [OptionGroupingUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class OptionGroupingUsageModule {
}
