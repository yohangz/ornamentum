import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { ClientSideDataBindingComponent, DataTableClientSideDataBindingComponent } from './index';

import { DataTableClientSideDataBindingRoutingModule } from './data-table-client-side-data-binding-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table client side data binding module.
 * @class DataTableClientSideDataBindingModule
 */
@NgModule({
  declarations: [
    ClientSideDataBindingComponent,
    DataTableClientSideDataBindingComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableClientSideDataBindingRoutingModule
  ],
  providers: []
})
export class DataTableClientSideDataBindingModule {
}
