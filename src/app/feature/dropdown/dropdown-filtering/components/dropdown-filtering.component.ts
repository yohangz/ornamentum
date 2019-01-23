import { Component } from '@angular/core';

import { filteringUsage, filterDebounceUsage, filterDebounceTimeUsage, filterTextUsage, demoSnippet } from './dropdown-filtering.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-filtering-component',
  templateUrl: './dropdown-filtering.component.html',
  styleUrls: ['./dropdown-filtering.component.scss']
})
export class DropdownFilteringComponent {
  public FileType = FileType;

  public filteringUsage = filteringUsage;
  public filterDebounceUsage = filterDebounceUsage;
  public filterDebounceTimeUsage = filterDebounceTimeUsage;
  public filterTextUsage = filterTextUsage;
  public demoSnippet = demoSnippet;
}
