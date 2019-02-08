import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableServerSideBasicRoutingModule } from './data-table-server-side-basic-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DataTableServerSideBasicComponent, ServerSideBasicUsageComponent } from './index';

/**
 * Module class for containing data table server side basic data binding module.
 */
@NgModule({
  declarations: [DataTableServerSideBasicComponent, ServerSideBasicUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule,
    DataTableServerSideBasicRoutingModule
  ],
  providers: []
})
export class DataTableServerSideBasicModule {
}
