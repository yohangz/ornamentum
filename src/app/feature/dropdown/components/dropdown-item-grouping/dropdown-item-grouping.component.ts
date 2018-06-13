import { Component } from '@angular/core';

import { itemGroupingUsage } from './dropdown-item-grouping.list';

@Component({
  selector: 'app-dropdown-item-grouping-component',
  templateUrl: './dropdown-item-grouping.component.html',
  styleUrls: ['./dropdown-item-grouping.component.scss']
})
export class DropdownItemGroupingComponent {
  public itemGroupingUsage = itemGroupingUsage;
}
