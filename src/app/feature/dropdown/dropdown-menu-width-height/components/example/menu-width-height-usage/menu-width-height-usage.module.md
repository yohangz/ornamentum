import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MenuWidthHeightUsageComponent } from './menu-width-height-usage.component';

@NgModule({
 bootstrap: [MenuWidthHeightUsageComponent],
 declarations: [MenuWidthHeightUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class MenuWidthHeightUsageModule {
}
