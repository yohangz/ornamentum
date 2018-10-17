import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { TableHeaderDetailsShowColumnSelectorUsageComponent } from './table-header-details-show-column-selector-usage.component';

@NgModule({
  bootstrap: [TableHeaderDetailsShowColumnSelectorUsageComponent],
  declarations: [TableHeaderDetailsShowColumnSelectorUsageComponent],
  imports: [BrowserModule, DataTableModule.forRoot()]
})
export class TableHeaderDetailsShowColumnSelectorUsageModule {
}
