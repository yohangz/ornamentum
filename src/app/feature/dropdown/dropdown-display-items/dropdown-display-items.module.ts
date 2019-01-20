import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownDisplayItemsComponent, DisplayItemsUsageComponent } from './index';

import { DropdownDisplayItemsRoutingModule } from './dropdown-display-items-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown display items module.
 */
@NgModule({
  declarations: [DropdownDisplayItemsComponent, DisplayItemsUsageComponent],
  exports: [],
  imports: [CommonModule, SharedModule.forRoot(), DropdownModule.forRoot(), DropdownDisplayItemsRoutingModule],
  providers: []
})
export class DropdownDisplayItemsModule {}
