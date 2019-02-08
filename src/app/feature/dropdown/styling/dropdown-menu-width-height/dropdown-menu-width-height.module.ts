import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownMenuWidthHeightComponent,
  MenuHeightUsageComponent,
  MenuWidthHeightUsageComponent,
  MenuWidthUsageComponent
} from './index';

import { DropdownMenuWidthHeightRoutingModule } from './dropdown-menu-width-height-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing dropdown menu width height module.
 */
@NgModule({
  declarations: [
    DropdownMenuWidthHeightComponent,
    MenuWidthHeightUsageComponent,
    MenuHeightUsageComponent,
    MenuWidthUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownMenuWidthHeightRoutingModule
  ],
  providers: []
})
export class DropdownMenuWidthHeightModule {
}
