import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownStylingAndThemesComponent } from './index';

import { DropdownStylingAndThemesRoutingModule } from './dropdown-styling-and-themes-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown styling and themes module.
 */
@NgModule({
  declarations: [DropdownStylingAndThemesComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownStylingAndThemesRoutingModule
  ],
  providers: []
})
export class DropdownStylingAndThemesModule {
}
