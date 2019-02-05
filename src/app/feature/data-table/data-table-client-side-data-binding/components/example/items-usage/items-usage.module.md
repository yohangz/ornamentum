import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ItemsUsageComponent } from './items-usage.component';

@NgModule({
 bootstrap: [ItemsUsageComponent],
 declarations: [ItemsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ItemsUsageModule {
}
