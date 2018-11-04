import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { RowSelectionUsageComponent } from './row-selection-usage.component';

@NgModule({
 bootstrap: [RowSelectionUsageComponent],
 declarations: [RowSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class RowSelectionUsageModule {
}
