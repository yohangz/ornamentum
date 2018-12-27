import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemDisablingUsageComponent } from './item-disabling-usage.component';

@NgModule({
 bootstrap: [ItemDisablingUsageComponent],
 declarations: [ItemDisablingUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class ItemDisablingUsageModule {
}
