import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnResizableUsageComponent } from './column-resizable-usage.component';

@NgModule({
 bootstrap: [ColumnResizableUsageComponent],
 declarations: [ColumnResizableUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ColumnResizableUsageModule {
}
