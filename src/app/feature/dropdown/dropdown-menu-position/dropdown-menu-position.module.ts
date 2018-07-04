import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownMenuPositionComponent, MenuPositionUsageComponent } from './index';

import { DropdownMenuPositionRoutingModule } from './dropdown-menu-position-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown menu position module.
 * @class DropdownMenuPositionModule
 */
@NgModule({
  declarations: [
    DropdownMenuPositionComponent,
    MenuPositionUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownMenuPositionRoutingModule
  ],
  providers: []
})
export class DropdownMenuPositionModule {
}
