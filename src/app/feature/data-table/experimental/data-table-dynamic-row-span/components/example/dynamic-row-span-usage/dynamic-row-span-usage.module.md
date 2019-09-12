import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DynamicRowSpanUsageComponent } from './dynamic-row-span-usage.component';

@NgModule({
 bootstrap: [DynamicRowSpanUsageComponent],
 declarations: [DynamicRowSpanUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class DynamicRowSpanUsageModule {
}
