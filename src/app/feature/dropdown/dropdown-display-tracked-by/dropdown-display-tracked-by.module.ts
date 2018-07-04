import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownDisplayTrackedByComponent, DisplayTrackedByUsageComponent } from './index';

import { DropdownDisplayTrackedByRoutingModule } from './dropdown-display-tracked-by-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown display tracked by module.
 * @class DropdownDisplayTrackedByModule
 */
@NgModule({
  declarations: [
    DropdownDisplayTrackedByComponent,
    DisplayTrackedByUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownDisplayTrackedByRoutingModule
  ],
  providers: []
})
export class DropdownDisplayTrackedByModule {
}
