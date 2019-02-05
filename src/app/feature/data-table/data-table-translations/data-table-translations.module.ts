import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableTranslationsComponent,
  TranslationsUsageComponent,
  TranslationsNoDataUsageComponent,
  TranslationsPaginationUsageComponent
} from './index';

import { DataTableTranslationsRoutingModule } from './data-table-translations-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table translations module.
 */
@NgModule({
  declarations: [
    DataTableTranslationsComponent,
    TranslationsUsageComponent,
    TranslationsNoDataUsageComponent,
    TranslationsPaginationUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableTranslationsRoutingModule
  ],
  providers: []
})
export class DataTableTranslationsModule {
}
