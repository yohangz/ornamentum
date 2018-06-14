import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MenuPositionUsageComponent } from './menu-position-usage.component';

@NgModule({
 bootstrap: [MenuPositionUsageComponent],
 declarations: [MenuPositionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class MenuPositionUsageModule {
}
