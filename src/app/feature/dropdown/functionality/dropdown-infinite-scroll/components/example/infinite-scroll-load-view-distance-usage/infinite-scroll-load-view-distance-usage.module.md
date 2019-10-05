import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LazyLoadingLoadViewDistanceUsageComponent } from './infinite-scroll-load-view-distance-usage.component';

@NgModule({
 bootstrap: [LazyLoadingLoadViewDistanceUsageComponent],
 declarations: [LazyLoadingLoadViewDistanceUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DropdownLazyLoadingLimitUsageModule {
}
