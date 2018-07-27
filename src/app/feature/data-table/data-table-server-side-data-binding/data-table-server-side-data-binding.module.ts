import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableServerSideDataBindingComponent, ServerSideDataBindingComponent } from './index';

import { DataTableServerSideDataBindingRoutingModule } from './data-table-server-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table server side data binding module.
 * @class DataTableServerSideDataBindingModule
 */
@NgModule({
  declarations: [
    DataTableServerSideDataBindingComponent,
    ServerSideDataBindingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableServerSideDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableServerSideDataBindingModule {
}
