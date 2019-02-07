import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { PageUsageComponent } from './page-usage.component';

@NgModule({
 bootstrap: [PageUsageComponent],
 declarations: [PageUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class PageUsageModule {
}
