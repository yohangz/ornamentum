import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLoadDataOnInitComponent, LoadDataOnInitUsageComponent } from './index';

import { DropdownLoadDataOnInitRoutingModule } from './dropdown-load-data-on-init-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

/**
 * Module class for containing dropdown load on init module.
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
