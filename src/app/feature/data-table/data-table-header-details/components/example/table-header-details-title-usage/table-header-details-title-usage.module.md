import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { TableHeaderDetailsTitleUsageComponent } from './table-header-details-title-usage.component';

@NgModule({
  bootstrap: [TableHeaderDetailsTitleUsageComponent],
  declarations: [TableHeaderDetailsTitleUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class TableHeaderDetailsTitleUsageModule {
}
