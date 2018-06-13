import { Component } from '@angular/core';

import { disablingUsage } from './dropdown-disabling.list';

@Component({
  selector: 'app-dropdown-disabling-component',
  templateUrl: './dropdown-disabling.component.html',
  styleUrls: ['./dropdown-disabling.component.scss']
})
export class DropdownDisablingComponent {
  public disablingUsage = disablingUsage;
}
