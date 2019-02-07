import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableServerSideBasicComponent, ServerSideBasicUsageComponent } from './index';

import { DataTableServerSideBasicRoutingModule } from './data-table-server-side-basic-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

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
    DataTableModule.forRoot({
      showColumnSelector: true,
      showHeader: true,
      pageable: true
    }),
    DataTableResourceModule,
    DataTableServerSideBasicRoutingModule
  ],
  providers: []
})
export class DataTableServerSideBasicModule {}
