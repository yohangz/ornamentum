import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MinHeightUsageComponent } from './min-height-usage.component';

@NgModule({
 bootstrap: [MinHeightUsageComponent],
 declarations: [MinHeightUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class MinHeightUsageModule {
}
