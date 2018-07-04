import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLoadOnScrollComponent, LoadOnScrollUsageComponent } from './index';

import { DropdownLoadOnScrollRoutingModule } from './dropdown-load-on-scroll-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown load on scroll module.
 * @class DropdownLoadOnScrollModule
 */
@NgModule({
  declarations: [
    DropdownLoadOnScrollComponent,
    LoadOnScrollUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownLoadOnScrollRoutingModule
  ],
  providers: []
})
export class DropdownLoadOnScrollModule {
}
