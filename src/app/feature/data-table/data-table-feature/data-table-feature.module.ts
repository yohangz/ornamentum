import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { COMPONENTS, SERVICES } from './index';

import { DataTableFeatureRoutingModule } from './data-table-feature-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table feature module.
 * @class DataTableFeatureModule
 */
@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableFeatureRoutingModule
  ],
  providers: [...SERVICES]
})
export class DataTableFeatureModule {
}
