import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ExpandOnRowClickUsageComponent } from './expand-on-row-click-usage.component';

@NgModule({
 bootstrap: [ExpandOnRowClickUsageComponent],
 declarations: [ExpandOnRowClickUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ExpandOnRowClickUsageModule {
}
