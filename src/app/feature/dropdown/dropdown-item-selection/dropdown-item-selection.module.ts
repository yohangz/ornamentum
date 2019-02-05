import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import {
  DropdownItemSelectionComponent,
  ItemSelectionUsageComponent,
  MultiItemSelectionUsageComponent,
  SingleItemSelectionUsageComponent,
  SingleToggleItemSelectionUsageComponent,
  SetFirstOptionSelectedUsageComponent,
  ShowOptionSelectCheckboxUsageComponent,
  SelectedOptionUsageComponent,
  SelectedOptionsUsageComponent,
  ShowClearSelectionButtonUsageComponent,
  ShowSelectedOptionRemoveButtonUsageComponent,
  MultiSelectOptionMaxWidthUsageComponent,
  WrapDisplaySelectLimitUsageComponent
} from './index';

import { DropdownItemSelectionRoutingModule } from './dropdown-item-selection-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown item selection module.
 */
@NgModule({
  declarations: [
    DropdownItemSelectionComponent,
    ItemSelectionUsageComponent,
    MultiItemSelectionUsageComponent,
    SingleItemSelectionUsageComponent,
    SingleToggleItemSelectionUsageComponent,
    SetFirstOptionSelectedUsageComponent,
    ShowOptionSelectCheckboxUsageComponent,
    SelectedOptionUsageComponent,
    SelectedOptionsUsageComponent,
    ShowClearSelectionButtonUsageComponent,
    ShowSelectedOptionRemoveButtonUsageComponent,
    MultiSelectOptionMaxWidthUsageComponent,
    WrapDisplaySelectLimitUsageComponent
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
