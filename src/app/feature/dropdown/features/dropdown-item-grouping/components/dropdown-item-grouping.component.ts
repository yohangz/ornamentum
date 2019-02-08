import { Component } from '@angular/core';

import { demoSnippet, itemGroupingUsage } from './dropdown-item-grouping.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-item-grouping-component',
  templateUrl: './dropdown-item-grouping.component.html',
  styleUrls: ['./dropdown-item-grouping.component.scss']
})
export class DropdownItemGroupingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemGroupingUsage = itemGroupingUsage;
}
