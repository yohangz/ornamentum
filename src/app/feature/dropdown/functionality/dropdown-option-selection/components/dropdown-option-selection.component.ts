import { Component } from '@angular/core';

import {
  demoSnippet,
  singleOptionSelectionUsage,
  singleToggleOptionSelectionUsage,
  multiOptionSelectionUsage,
  optionSelectionUsage,
  setFirstOptionSelectedUsage,
  showOptionSelectCheckboxUsage,
  selectedOptionUsage,
  selectedOptionsUsage,
  showClearSelectionButtonUsage,
  showSelectedOptionRemoveButtonUsage,
  multiSelectOptionMaxWidthUsage,
  wrapDisplaySelectLimitUsage,
} from './dropdown-option-selection.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-option-selection-component',
  templateUrl: './dropdown-option-selection.component.html',
  styleUrls: ['./dropdown-option-selection.component.scss']
})
export class DropdownOptionSelectionComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public singleOptionSelectionUsage = singleOptionSelectionUsage;
  public singleToggleOptionSelectionUsage = singleToggleOptionSelectionUsage;
  public multiOptionSelectionUsage = multiOptionSelectionUsage;
  public optionSelectionUsage = optionSelectionUsage;
  public setFirstOptionSelectedUsage = setFirstOptionSelectedUsage;
  public showOptionSelectCheckboxUsage = showOptionSelectCheckboxUsage;
  public selectedOptionUsage = selectedOptionUsage;
  public selectedOptionsUsage = selectedOptionsUsage;
  public showClearSelectionButtonUsage = showClearSelectionButtonUsage;
  public showSelectedOptionRemoveButtonUsage = showSelectedOptionRemoveButtonUsage;
  public multiSelectOptionMaxWidthUsage = multiSelectOptionMaxWidthUsage;
  public wrapDisplaySelectLimitUsage = wrapDisplaySelectLimitUsage;
}
