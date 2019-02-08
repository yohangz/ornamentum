import { Component } from '@angular/core';

import {
  demoSnippet,
  menuWidthHeightUsage,
  menuHeightUsage,
  menuWidthUsage
} from './dropdown-menu-width-height.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-menu-width-height-component',
  templateUrl: './dropdown-menu-width-height.component.html',
  styleUrls: ['./dropdown-menu-width-height.component.scss']
})
export class DropdownMenuWidthHeightComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public menuWidthHeightUsage = menuWidthHeightUsage;
  public menuHeightUsage = menuHeightUsage;
  public menuWidthUsage = menuWidthUsage;
}
