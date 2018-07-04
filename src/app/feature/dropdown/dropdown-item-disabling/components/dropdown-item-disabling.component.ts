import { Component } from '@angular/core';

import { itemDisablingUsage } from './dropdown-item-disabling.list';

@Component({
  selector: 'app-dropdown-item-disabling-component',
  templateUrl: './dropdown-item-disabling.component.html',
  styleUrls: ['./dropdown-item-disabling.component.scss']
})
export class DropdownItemDisablingComponent {
  public itemDisablingUsage = itemDisablingUsage;
}
