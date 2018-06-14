import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LoadOnScrollUsageComponent } from './load-on-scroll-usage.component';

@NgModule({
 bootstrap: [LoadOnScrollUsageComponent],
 declarations: [LoadOnScrollUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class LoadOnScrollUsageModule {
}
