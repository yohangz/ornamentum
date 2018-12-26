import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MenuPositionUsageComponent } from './menu-position-usage.component';

@NgModule({
 bootstrap: [MenuPositionUsageComponent],
 declarations: [MenuPositionUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class MenuPositionUsageModule {
}
