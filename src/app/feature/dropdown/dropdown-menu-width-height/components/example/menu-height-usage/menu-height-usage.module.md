import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MenuHeightUsageComponent } from './menu-height-usage.component';

@NgModule({
 bootstrap: [MenuHeightUsageComponent],
 declarations: [MenuHeightUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class MenuHeightUsageModule {
}
