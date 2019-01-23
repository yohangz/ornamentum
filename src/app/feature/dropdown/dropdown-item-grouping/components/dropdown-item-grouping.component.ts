import { Component } from '@angular/core';

import { itemGroupingUsage, demoSnippet } from './dropdown-item-grouping.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-item-grouping-component',
  templateUrl: './dropdown-item-grouping.component.html',
  styleUrls: ['./dropdown-item-grouping.component.scss']
})
export class DropdownItemGroupingComponent {
  public FileType = FileType;

  public itemGroupingUsage = itemGroupingUsage;
  public demoSnippet = demoSnippet;
}
