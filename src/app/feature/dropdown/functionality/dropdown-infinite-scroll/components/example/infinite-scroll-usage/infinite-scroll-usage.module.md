import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LazyLoadingUsageComponent } from './infinite-scroll-usage.component';

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
