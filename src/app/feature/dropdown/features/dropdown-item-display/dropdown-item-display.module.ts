import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownItemDisplayComponent, ItemDisplayUsageComponent } from './index';

import { DropdownItemDisplayRoutingModule } from './dropdown-item-display-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing dropdown display items module.
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
