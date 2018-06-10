import { Component } from '@angular/core';

import {
  itemSelecttionWithAllOptionsUsage,
  multiItemSelectionUsage,
  singleItemSelectionUsage,
  singleToggleItemSelectionUsage
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
  public itemSelecttionWithAllOptionsUsage = itemSelecttionWithAllOptionsUsage;
}
