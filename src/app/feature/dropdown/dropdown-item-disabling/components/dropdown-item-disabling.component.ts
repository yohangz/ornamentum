import { Component } from '@angular/core';

import { itemDisablingUsage, demoSnippet } from './dropdown-item-disabling.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-item-disabling-component',
  templateUrl: './dropdown-item-disabling.component.html',
  styleUrls: ['./dropdown-item-disabling.component.scss']
})
export class DropdownItemDisablingComponent {
  public FileType = FileType;

  public itemDisablingUsage = itemDisablingUsage;
  public demoSnippet = demoSnippet;
}
