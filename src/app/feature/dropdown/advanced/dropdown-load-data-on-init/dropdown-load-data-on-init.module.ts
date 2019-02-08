import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLoadDataOnInitRoutingModule } from './dropdown-load-data-on-init-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownLoadDataOnInitComponent, LoadDataOnInitUsageComponent } from './index';

/**
 * Module class for containing dropdown load data on init module.
 */
@NgModule({
  declarations: [
    DropdownLoadDataOnInitComponent,
    LoadDataOnInitUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownLoadDataOnInitRoutingModule
  ],
  providers: []
})
export class DropdownLoadDataOnInitModule {
}
