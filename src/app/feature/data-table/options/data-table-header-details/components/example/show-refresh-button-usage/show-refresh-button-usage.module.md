import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { ShowRefreshButtonUsageComponent } from './table-header-details-show-refresh-btn-usage.component';

@NgModule({
  bootstrap: [ShowRefreshButtonUsageComponent],
  declarations: [ShowRefreshButtonUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot(),
      DataTableResourceModule.forRoot()
    ]
})
export class ShowRefreshButtonUsageModule {
}
