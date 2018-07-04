import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownFilteringComponent, FilteringUsageComponent } from './index';

import { DropdownFilteringRoutingModule } from './dropdown-filtering-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown filtering module.
 * @class DropdownFilteringModule
 */
@NgModule({
  declarations: [
    DropdownFilteringComponent,
    FilteringUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownFilteringRoutingModule
  ],
  providers: []
})
export class DropdownFilteringModule {
}
