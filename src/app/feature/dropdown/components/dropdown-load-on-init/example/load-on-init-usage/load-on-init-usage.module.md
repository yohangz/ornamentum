import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { LoadOnInitUsageComponent } from './load-on-init-usage.component';

@NgModule({
 bootstrap: [LoadOnInitUsageComponent],
 declarations: [LoadOnInitUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class LoadOnInitUsageModule {
}
