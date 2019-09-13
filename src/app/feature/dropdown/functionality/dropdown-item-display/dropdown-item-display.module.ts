import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownItemDisplayRoutingModule } from './dropdown-item-display-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownItemDisplayComponent, ItemDisplayUsageComponent } from './index';

/**
 * Module class for containing dropdown item display module.
 */
@NgModule({
  declarations: [
    DropdownItemDisplayComponent,
    ItemDisplayUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownItemDisplayRoutingModule
  ],
  providers: []
})
export class DropdownItemDisplayModule {
}
