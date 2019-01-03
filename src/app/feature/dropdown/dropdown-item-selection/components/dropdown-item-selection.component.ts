import { Component } from '@angular/core';

import {
  itemSelectionWithAllOptionsUsage,
  multiItemSelectionUsage,
  singleItemSelectionUsage,
  singleToggleItemSelectionUsage,
  itemSelectionSetFirstOptionSelectedUsage,
  itemSelectionShowOptionSelectCheckboxUsage,
  itemSelectionSelectedOptionUsage,
  itemSelectionSelectedOptionsUsage,
  itemSelectionShowClearSelectionBtnUsage,
  itemSelectionShowSelectedOptionRemoveBtnUsage,
  itemSelectionMultiSelectOptionMaxWidthUsage,
  itemSelectionWrapDisplaySelectLimitUsage,
  demoSnippet
} from './dropdown-item-selection.list';

@Component({
  selector: 'app-dropdown-item-selection-component',
  templateUrl: './dropdown-item-selection.component.html',
  styleUrls: ['./dropdown-item-selection.component.scss']
})
export class DropdownItemSelectionComponent {
  public singleItemSelectionUsage = singleItemSelectionUsage;
  public singleToggleItemSelectionUsage = singleToggleItemSelectionUsage;
  public multiItemSelectionUsage = multiItemSelectionUsage;
  public itemSelectionWithAllOptionsUsage = itemSelectionWithAllOptionsUsage;
  public itemSelectionSetFirstOptionSelectedUsage = itemSelectionSetFirstOptionSelectedUsage;
  public itemSelectionShowOptionSelectCheckboxUsage = itemSelectionShowOptionSelectCheckboxUsage;
  public itemSelectionSelectedOptionUsage = itemSelectionSelectedOptionUsage;
  public itemSelectionSelectedOptionsUsage = itemSelectionSelectedOptionsUsage;
  public itemSelectionShowClearSelectionBtnUsage = itemSelectionShowClearSelectionBtnUsage;
  public itemSelectionShowSelectedOptionRemoveBtnUsage = itemSelectionShowSelectedOptionRemoveBtnUsage;
  public itemSelectionMultiSelectOptionMaxWidthUsage = itemSelectionMultiSelectOptionMaxWidthUsage;
  public itemSelectionWrapDisplaySelectLimitUsage = itemSelectionWrapDisplaySelectLimitUsage;
  public demoSnippet = demoSnippet;
}
