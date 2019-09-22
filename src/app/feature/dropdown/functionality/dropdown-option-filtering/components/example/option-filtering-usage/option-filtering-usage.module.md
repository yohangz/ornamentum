import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionFilteringUsageComponent } from './option-filtering-usage.component';

@NgModule({
 bootstrap: [OptionFilteringUsageComponent],
 declarations: [OptionFilteringUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class OptionFilteringUsageModule {
}
