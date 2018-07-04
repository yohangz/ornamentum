import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownMenuWidthHeightComponent, MenuWidthHeightUsageComponent } from './index';

import { DropdownMenuWidthHeightRoutingModule } from './dropdown-menu-width-height-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown menu width height module.
 * @class DropdownMenuWidthHeightModule
 */
@NgModule({
  declarations: [
    DropdownMenuWidthHeightComponent,
    MenuWidthHeightUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownMenuWidthHeightRoutingModule
  ],
  providers: []
})
export class DropdownMenuWidthHeightModule {
}
