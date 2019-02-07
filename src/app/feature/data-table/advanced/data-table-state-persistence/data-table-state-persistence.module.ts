import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  StorageModeUsageComponent,
  StatePersistenceUsageComponent,
  DataTableStatePersistenceComponent
} from './index';

import { DataTableStatePersistenceRoutingModule } from './data-table-state-persistence-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table persist data module.
 */
@NgModule({
  declarations: [
    DataTableStatePersistenceComponent,
    StatePersistenceUsageComponent,
    StorageModeUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableStatePersistenceRoutingModule
  ],
  providers: []
})
export class DataTableStatePersistenceModule {
}
