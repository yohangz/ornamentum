import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  filterDebounceTimeUsage,
  filterDebounceUsage,
  filterTextUsage,
  optionFilteringUsage,
  optionFilteringServerSideUsage
} from './dropdown-option-filtering.list';

@Component({
  selector: 'app-dropdown-option-filtering-component',
  templateUrl: './dropdown-option-filtering.component.html',
  styleUrls: ['./dropdown-option-filtering.component.scss']
})
export class DropdownOptionFilteringComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public optionFilteringUsage = optionFilteringUsage;
  public filterDebounceUsage = filterDebounceUsage;
  public filterDebounceTimeUsage = filterDebounceTimeUsage;
  public filterTextUsage = filterTextUsage;
  public optionFilteringServerSideUsage = optionFilteringServerSideUsage;
}
