import { Component } from '@angular/core';

import { demoSnippet, optionGroupingUsage } from './dropdown-option-grouping.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-option-grouping-component',
  templateUrl: './dropdown-option-grouping.component.html',
  styleUrls: ['./dropdown-option-grouping.component.scss']
})
export class DropdownOptionGroupingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public optionGroupingUsage = optionGroupingUsage;
}
