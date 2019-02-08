import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownMenuPositionRoutingModule } from './dropdown-menu-position-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownMenuPositionComponent, MenuPositionUsageComponent } from './index';

/**
 * Module class for containing dropdown menu position module.
 */
@NgModule({
  declarations: [
    DropdownMenuPositionComponent,
    MenuPositionUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownMenuPositionRoutingModule
  ],
  providers: []
})
export class DropdownMenuPositionModule {
}
