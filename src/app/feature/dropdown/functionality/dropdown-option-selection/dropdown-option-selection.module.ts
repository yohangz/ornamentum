import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionSelectionRoutingModule } from './dropdown-option-selection-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DropdownOptionSelectionComponent,
  OptionSelectionUsageComponent,
  MultiOptionSelectionUsageComponent,
  SingleOptionSelectionUsageComponent,
  SingleToggleOptionSelectionUsageComponent,
  SetFirstOptionSelectedUsageComponent,
  ShowOptionSelectCheckboxUsageComponent,
  SelectedOptionUsageComponent,
  SelectedOptionsUsageComponent,
  ShowClearSelectionButtonUsageComponent,
  ShowSelectedOptionRemoveButtonUsageComponent,
  MultiSelectOptionMaxWidthUsageComponent,
  WrapDisplaySelectLimitUsageComponent
} from './index';

/**
 * Module class for containing dropdown option selection module.
 */
@NgModule({
  declarations: [
    DropdownOptionSelectionComponent,
    OptionSelectionUsageComponent,
    MultiOptionSelectionUsageComponent,
    SingleOptionSelectionUsageComponent,
    SingleToggleOptionSelectionUsageComponent,
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
    DropdownOptionSelectionRoutingModule
  ],
  providers: []
})
export class DropdownOptionSelectionModule {
}
