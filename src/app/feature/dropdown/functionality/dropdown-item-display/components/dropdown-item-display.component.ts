import { Component } from '@angular/core';

import { demoSnippet, itemDisplayUsage } from './dropdown-item-display.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-item-display-component',
  templateUrl: './dropdown-item-display.component.html',
  styleUrls: ['./dropdown-item-display.component.scss']
})
export class DropdownItemDisplayComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemDisplayUsage = itemDisplayUsage;
}
