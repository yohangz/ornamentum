import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { CellTemplateUsageComponent } from './cell-template-usage.component';

@NgModule({
 bootstrap: [CellTemplateUsageComponent],
 declarations: [CellTemplateUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class CellTemplateUsageModule {
}
