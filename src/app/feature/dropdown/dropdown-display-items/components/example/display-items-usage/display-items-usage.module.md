import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { DisplayItemsUsageComponent } from './display-items-usage.component';

@NgModule({
 bootstrap: [DisplayItemsUsageComponent],
 declarations: [DisplayItemsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DisplayItemsUsageModule {
}
