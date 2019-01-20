import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableCustomThemingComponent } from './index';

import { DataTableCustomThemingRoutingModule } from './data-table-custom-theming-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table custom theming module.
 */
@NgModule({
  declarations: [DataTableCustomThemingComponent],
  exports: [],
  imports: [CommonModule, FormsModule, SharedModule.forRoot(), DataTableModule.forRoot(), DataTableCustomThemingRoutingModule],
  providers: []
})
export class DataTableCustomThemingModule {}
