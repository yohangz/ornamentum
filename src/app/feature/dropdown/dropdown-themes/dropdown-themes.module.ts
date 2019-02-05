import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownThemesComponent } from './index';

import { DropdownThemesRoutingModule } from './dropdown-themes-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown themes module.
 */
@NgModule({
  declarations: [DropdownThemesComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownThemesRoutingModule
  ],
  providers: []
})
export class DropdownThemesModule {
}
