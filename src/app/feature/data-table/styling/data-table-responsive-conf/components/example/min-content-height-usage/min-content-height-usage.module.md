import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MinContentHeightUsageComponent } from './min-content-height-usage.component';

@NgModule({
 bootstrap: [MinContentHeightUsageComponent],
 declarations: [MinContentHeightUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class MinContentHeightUsageModule {
}
