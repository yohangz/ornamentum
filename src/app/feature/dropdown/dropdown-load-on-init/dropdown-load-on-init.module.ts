import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLoadOnInitComponent, LoadOnInitUsageComponent } from './index';

import { DropdownLoadOnInitRoutingModule } from './dropdown-load-on-init-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown load on init module.
 * @class DropdownLoadOnInitModule
 */
@NgModule({
  declarations: [
    DropdownLoadOnInitComponent,
    LoadOnInitUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownLoadOnInitRoutingModule
  ],
  providers: []
})
export class DropdownLoadOnInitModule {
}
