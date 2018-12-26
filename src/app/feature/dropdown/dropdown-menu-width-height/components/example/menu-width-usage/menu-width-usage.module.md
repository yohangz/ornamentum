import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MenuWidthUsageComponent } from './menu-width-usage.component';

@NgModule({
 bootstrap: [MenuWidthUsageComponent],
 declarations: [MenuWidthUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class MenuWidthUsageModule {
}
