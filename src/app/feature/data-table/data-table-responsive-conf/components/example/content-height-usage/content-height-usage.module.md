import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ContentHeightUsageComponent } from './content-height-usage.component';

@NgModule({
 bootstrap: [ContentHeightUsageComponent],
 declarations: [ContentHeightUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ContentHeightUsageModule {
}
