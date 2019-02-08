import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownCustomThemingRoutingModule } from './dropdown-custom-theming-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownCustomThemingComponent } from './index';

/**
 * Module class for containing dropdown custom theming module.
 */
@NgModule({
  declarations: [DropdownCustomThemingComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownCustomThemingRoutingModule
  ],
  providers: []
})
export class DropdownCustomThemingModule {
}
