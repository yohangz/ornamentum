import { Component } from '@angular/core';

import { menuPositionUsage, demoSnippet } from './dropdown-menu-position.list';

@Component({
  selector: 'app-dropdown-menu-position-component',
  templateUrl: './dropdown-menu-position.component.html',
  styleUrls: ['./dropdown-menu-position.component.scss']
})
export class DropdownMenuPositionComponent {
  public menuPositionUsage = menuPositionUsage;
  public demoSnippet = demoSnippet;
}
