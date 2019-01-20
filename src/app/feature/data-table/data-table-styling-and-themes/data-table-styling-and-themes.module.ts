import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableStylingAndThemesComponent } from './index';

import { DataTableStylingAndThemesRoutingModule } from './data-table-styling-and-themes-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table styling and themes module.
 */
@NgModule({
  declarations: [DataTableStylingAndThemesComponent],
  exports: [],
  imports: [CommonModule, FormsModule, SharedModule.forRoot(), DataTableModule.forRoot(), DataTableStylingAndThemesRoutingModule],
  providers: []
})
export class DataTableStylingAndThemesModule {}
