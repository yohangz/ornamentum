import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ItemDisplayUsageComponent } from './item-display-usage.component';

@NgModule({
 bootstrap: [ItemDisplayUsageComponent],
 declarations: [ItemDisplayUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ItemDisplayUsageComponent {
}
