import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MenuWidthHeightUsageComponent } from './menu-width-height-usage.component';

@NgModule({
 bootstrap: [MenuWidthHeightUsageComponent],
 declarations: [MenuWidthHeightUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class MenuWidthHeightUsageModule {
}
