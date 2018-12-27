import { Component } from '@angular/core';

import {
  menuWidthHeightUsage,
  menuHeightUsage,
  menuWidthUsage,
  demoSnippet
} from './dropdown-menu-width-height.list';

@Component({
  selector: 'app-dropdown-menu-width-height-component',
  templateUrl: './dropdown-menu-width-height.component.html',
  styleUrls: ['./dropdown-menu-width-height.component.scss']
})
export class DropdownMenuWidthHeightComponent {
  public menuWidthHeightUsage = menuWidthHeightUsage;
  public menuHeightUsage = menuHeightUsage;
  public menuWidthUsage = menuWidthUsage;
  public demoSnippet = demoSnippet;
}
