import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ornamentum';

import { COMPONENTS } from './index';

import { DropdownFeatureRoutingModule } from './dropdown-feature-routing.module';

import { SharedModule } from '../../shared/shared.module';

/**
 * Module class for containing dropdown feature module.
 * @class DropdownFeatureModule
 */
@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownFeatureRoutingModule
  ],
  providers: []
})
export class DropdownFeatureModule {
}
