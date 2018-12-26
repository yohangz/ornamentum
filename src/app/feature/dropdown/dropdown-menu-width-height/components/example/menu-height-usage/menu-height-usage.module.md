import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MenuHeightUsageComponent } from './menu-height-usage.component';

@NgModule({
 bootstrap: [MenuHeightUsageComponent],
 declarations: [MenuHeightUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class MenuHeightUsageModule {
}
