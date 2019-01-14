import { Component } from '@angular/core';

import { onDataBindUsage, demoSnippet } from './dropdown-on-data-bind.list';

@Component({
  selector: 'app-dropdown-on-data-bind-component',
  templateUrl: './dropdown-on-data-bind.component.html',
  styleUrls: ['./dropdown-on-data-bind.component.scss']
})
export class DropdownOnDataBindComponent {
  public onDataBindUsage = onDataBindUsage;
  public demoSnippet = demoSnippet;
}
