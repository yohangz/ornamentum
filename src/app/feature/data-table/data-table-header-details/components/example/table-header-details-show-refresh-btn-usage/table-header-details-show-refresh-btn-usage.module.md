import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { TableHeaderDetailsShowRefreshBtnUsageComponent } from './table-header-details-show-refresh-btn-usage.component';

@NgModule({
  bootstrap: [TableHeaderDetailsShowRefreshBtnUsageComponent],
  declarations: [TableHeaderDetailsShowRefreshBtnUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class TableHeaderDetailsShowRefreshBtnUsageModule {
}
