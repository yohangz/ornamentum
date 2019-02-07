import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SelectOnRowClickUsageComponent } from './select-on-row-click-usage.component';

@NgModule({
 bootstrap: [SelectOnRowClickUsageComponent],
 declarations: [SelectOnRowClickUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SelectOnRowClickUsageModule {
}
