import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemFilteringUsageComponent } from './item-filtering-usage.component';

@NgModule({
 bootstrap: [ItemFilteringUsageComponent],
 declarations: [ItemFilteringUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemFilteringUsageModule {
}
