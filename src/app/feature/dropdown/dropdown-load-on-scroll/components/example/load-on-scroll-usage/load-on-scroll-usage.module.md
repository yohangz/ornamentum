import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LoadOnScrollUsageComponent } from './load-on-scroll-usage.component';

@NgModule({
 bootstrap: [LoadOnScrollUsageComponent],
 declarations: [LoadOnScrollUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class LoadOnScrollUsageModule {
}
