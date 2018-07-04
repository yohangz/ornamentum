import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownItemSelectionComponent,
  ItemSelectionWithAllOptionsUsageComponent,
  MultiItemSelectionUsageComponent,
  MultiItemWrappedSelectionUsageComponent,
  SingleItemSelectionUsageComponent,
  SingleToggleItemSelectionUsageComponent
} from './index';

import { DropdownItemSelectionRoutingModule } from './dropdown-item-selection-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown item selection module.
 * @class DropdownItemSelectionModule
 */
@NgModule({
  declarations: [
    DropdownItemSelectionComponent,
    ItemSelectionWithAllOptionsUsageComponent,
    MultiItemSelectionUsageComponent,
    MultiItemWrappedSelectionUsageComponent,
    SingleItemSelectionUsageComponent,
    SingleToggleItemSelectionUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule.forRoot(),
    DropdownItemSelectionRoutingModule
  ],
  providers: []
})
export class DropdownItemSelectionModule {
}
