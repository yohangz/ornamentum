import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ItemDisablingUsageComponent } from './item-disabling-usage.component';

@NgModule({
 bootstrap: [ItemDisablingUsageComponent],
 declarations: [ItemDisablingUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ItemDisablingUsageModule {
}
