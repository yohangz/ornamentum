import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemsUsageComponent } from './items-usage.component';

@NgModule({
 bootstrap: [ItemsUsageComponent],
 declarations: [ItemsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemsUsageModule {
}
