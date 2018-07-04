import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ItemGroupingUsageComponent } from './item-grouping-usage.component';

@NgModule({
 bootstrap: [ItemGroupingUsageComponent],
 declarations: [ItemGroupingUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ItemGroupingUsageModule {
}
