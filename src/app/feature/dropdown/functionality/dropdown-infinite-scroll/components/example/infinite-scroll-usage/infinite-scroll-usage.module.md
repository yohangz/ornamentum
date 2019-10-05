import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LazyLoadingUsageComponent } from './lazy-loading-usage.component';

@NgModule({
 bootstrap: [LazyLoadingUsageComponent],
 declarations: [LazyLoadingUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DropdownLazyLoadingUsageModule {
}
