import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MenuWidthUsageComponent } from './menu-width-usage.component';

@NgModule({
 bootstrap: [MenuWidthUsageComponent],
 declarations: [MenuWidthUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class MenuWidthUsageModule {
}
