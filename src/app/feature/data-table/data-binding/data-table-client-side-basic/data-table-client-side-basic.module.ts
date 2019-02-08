import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableClientSideBasicRoutingModule } from './data-table-client-side-basic-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  ItemsUsageComponent,
  DataSourceUsageComponent,
  DataTableClientSideBasicComponent
} from './index';

@NgModule({
  declarations: [
    ItemsUsageComponent,
    DataTableClientSideBasicComponent,
    DataSourceUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableClientSideBasicRoutingModule
  ],
  providers: []
})
export class DataTableClientSideBasicModule {
}
