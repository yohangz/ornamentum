import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { ShowRefreshButtonUsageComponent } from './table-header-details-show-refresh-btn-usage.component';

@NgModule({
  bootstrap: [ShowRefreshButtonUsageComponent],
  declarations: [ShowRefreshButtonUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class ShowRefreshButtonUsageModule {
}
