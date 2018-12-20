import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ColumnResizingUsageComponent } from './column-resizing-usage.component';

@NgModule({
 bootstrap: [ColumnResizingUsageComponent],
 declarations: [ColumnResizingUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ColumnResizingUsageModule {
}
