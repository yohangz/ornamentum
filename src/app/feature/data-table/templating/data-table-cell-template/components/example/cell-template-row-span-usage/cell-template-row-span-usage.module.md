import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { CellTemplateRowSpanUsageComponent } from './cell-template-row-span-usage.component';

@NgModule({
 bootstrap: [CellTemplateRowSpanUsageComponent],
 declarations: [CellTemplateRowSpanUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class CellTemplateRowSpanUsageModule {
}
