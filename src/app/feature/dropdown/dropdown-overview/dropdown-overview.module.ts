import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOverviewComponent, BasicUsageComponent } from './index';

import { DropdownOverviewRoutingModule } from './dropdown-overview-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown overview module.
 */
@NgModule({
  declarations: [DropdownOverviewComponent, BasicUsageComponent],
  exports: [],
  imports: [CommonModule, SharedModule.forRoot(), DropdownModule.forRoot(), DropdownOverviewRoutingModule],
  providers: []
})
export class DropdownOverviewModule {}
