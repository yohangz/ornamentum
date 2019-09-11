import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { CellTemplateRowspanComponent } from './cell-template-rowspan.component';

@NgModule({
 bootstrap: [CellTemplateRowspanComponent],
 declarations: [CellTemplateRowspanComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class CellTemplateUsageModule {
}
