import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DisplayItemsUsageComponent } from './display-items-usage.component';

@NgModule({
 bootstrap: [DisplayItemsUsageComponent],
 declarations: [DisplayItemsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class DisplayItemsUsageModule {
}
