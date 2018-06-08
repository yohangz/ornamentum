import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { BasicUsageComponent } from './basic-usage.component';

@NgModule({
 bootstrap: [BasicUsageComponent],
 declarations: [BasicUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class BasicUsageModule {
}
