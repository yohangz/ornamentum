import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownTranslationsRoutingModule } from './dropdown-translations-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownTranslationsComponent,
  AdditionalTranslationsUsageComponent,
  TranslationsNoDataMessageUsageComponent,
  TranslationsFilterPlaceholderUsageComponent,
  TranslationsSelectPlaceholderUsageComponent,
  TranslationsSelectedOptionWrapPlaceholderUsageComponent
} from './index';

/**
 * Module class for containing dropdown translations module.
 */
@NgModule({
  declarations: [
    DropdownTranslationsComponent,
    AdditionalTranslationsUsageComponent,
    TranslationsNoDataMessageUsageComponent,
    TranslationsFilterPlaceholderUsageComponent,
    TranslationsSelectPlaceholderUsageComponent,
    TranslationsSelectedOptionWrapPlaceholderUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownTranslationsRoutingModule
  ],
  providers: []
})
export class DropdownTranslationsModule {
}
