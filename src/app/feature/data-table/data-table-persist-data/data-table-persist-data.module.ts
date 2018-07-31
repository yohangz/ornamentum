import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTablePersistDataComponent, DataPersistenceUsageComponent } from './index';

import { DataTablePersistDataRoutingModule } from './data-table-persist-data-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table persist data module.
 * @class DataTablePersistDataModule
 */
@NgModule({
  declarations: [
    DataTablePersistDataComponent,
    DataPersistenceUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTablePersistDataRoutingModule
  ],
  providers: []
})
export class DataTablePersistDataModule {
}
