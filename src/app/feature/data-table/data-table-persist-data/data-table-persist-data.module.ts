import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataPersistenceStorageModeUsageComponent, DataPersistenceUsageComponent, DataTablePersistDataComponent } from './index';

import { DataTablePersistDataRoutingModule } from './data-table-persist-data-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table persist data module.
 */
@NgModule({
  declarations: [DataTablePersistDataComponent, DataPersistenceUsageComponent, DataPersistenceStorageModeUsageComponent],
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
export class DataTablePersistDataModule {}
