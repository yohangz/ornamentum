import { Component } from '@angular/core';

import { demoSnippet, menuPositionUsage } from './dropdown-menu-position.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-menu-position-component',
  templateUrl: './dropdown-menu-position.component.html',
  styleUrls: ['./dropdown-menu-position.component.scss']
})
export class DropdownMenuPositionComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public menuPositionUsage = menuPositionUsage;
}
