import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownItemSelectionComponent,
  ItemSelectionWithAllOptionsUsageComponent,
  MultiItemSelectionUsageComponent,
  SingleItemSelectionUsageComponent,
  SingleToggleItemSelectionUsageComponent,
  ItemSelectionSetFirstOptionSelectedUsageComponent,
  ItemSelectionShowOptionSelectCheckboxUsageComponent,
  ItemSelectionSelectedOptionUsageComponent,
  ItemSelectionSelectedOptionsUsageComponent,
  ItemSelectionShowClearSelectionBtnUsageComponent,
  ItemSelectionShowSelectedOptionRemoveBtnUsageComponent,
  ItemSelectionMultiSelectOptionMaxWidthUsageComponent,
  ItemSelectionWrapDisplaySelectLimitUsageComponent
} from './index';

import { DropdownItemSelectionRoutingModule } from './dropdown-item-selection-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown item selection module.
 */
@NgModule({
  declarations: [
    DropdownItemSelectionComponent,
    ItemSelectionWithAllOptionsUsageComponent,
    MultiItemSelectionUsageComponent,
    SingleItemSelectionUsageComponent,
    SingleToggleItemSelectionUsageComponent,
    ItemSelectionSetFirstOptionSelectedUsageComponent,
    ItemSelectionShowOptionSelectCheckboxUsageComponent,
    ItemSelectionSelectedOptionUsageComponent,
    ItemSelectionSelectedOptionsUsageComponent,
    ItemSelectionShowClearSelectionBtnUsageComponent,
    ItemSelectionShowSelectedOptionRemoveBtnUsageComponent,
    ItemSelectionMultiSelectOptionMaxWidthUsageComponent,
    ItemSelectionWrapDisplaySelectLimitUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownItemSelectionRoutingModule
  ],
  providers: []
})
export class DropdownItemSelectionModule {
}
