import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LazyLoadingLimitUsageComponent } from './dropdown-lazy-loading-limit-usage.component';

@NgModule({
 bootstrap: [LazyLoadingLimitUsageComponent],
 declarations: [LazyLoadingLimitUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DropdownLazyLoadingLimitUsageModule {
}
