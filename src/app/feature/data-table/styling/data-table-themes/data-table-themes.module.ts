import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableThemesComponent } from './index';

import { DataTableThemesRoutingModule } from './data-table-themes-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing data table themes module.
 */
@NgModule({
  declarations: [DataTableThemesComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableThemesRoutingModule
  ],
  providers: []
})
export class DataTableThemesModule {
}
