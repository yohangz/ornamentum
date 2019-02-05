import { Component } from '@angular/core';

import {
  demoSnippet,
  itemSelectionUsage,
  multiItemSelectionUsage,
  singleItemSelectionUsage,
  singleToggleItemSelectionUsage,
  setFirstOptionSelectedUsage,
  showOptionSelectCheckboxUsage,
  selectedOptionUsage,
  selectedOptionsUsage,
  showClearSelectionButtonUsage,
  showSelectedOptionRemoveButtonUsage,
  multiSelectOptionMaxWidthUsage,
  wrapDisplaySelectLimitUsage,
} from './dropdown-item-selection.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-item-selection-component',
  templateUrl: './dropdown-item-selection.component.html',
  styleUrls: ['./dropdown-item-selection.component.scss']
})
export class DropdownItemSelectionComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public singleItemSelectionUsage = singleItemSelectionUsage;
  public singleToggleItemSelectionUsage = singleToggleItemSelectionUsage;
  public multiItemSelectionUsage = multiItemSelectionUsage;
  public itemSelectionUsage = itemSelectionUsage;
  public setFirstOptionSelectedUsage = setFirstOptionSelectedUsage;
  public showOptionSelectCheckboxUsage = showOptionSelectCheckboxUsage;
  public selectedOptionUsage = selectedOptionUsage;
  public selectedOptionsUsage = selectedOptionsUsage;
  public showClearSelectionButtonUsage = showClearSelectionButtonUsage;
  public showSelectedOptionRemoveButtonUsage = showSelectedOptionRemoveButtonUsage;
  public multiSelectOptionMaxWidthUsage = multiSelectOptionMaxWidthUsage;
  public wrapDisplaySelectLimitUsage = wrapDisplaySelectLimitUsage;
}
