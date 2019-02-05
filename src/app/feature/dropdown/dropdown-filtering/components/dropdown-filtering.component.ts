import { Component } from '@angular/core';

import {
  demoSnippet,
  filteringUsage,
  filterDebounceUsage,
  filterDebounceTimeUsage,
  filterTextUsage
} from './dropdown-filtering.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-filtering-component',
  templateUrl: './dropdown-filtering.component.html',
  styleUrls: ['./dropdown-filtering.component.scss']
})
export class DropdownFilteringComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public filteringUsage = filteringUsage;
  public filterDebounceUsage = filterDebounceUsage;
  public filterDebounceTimeUsage = filterDebounceTimeUsage;
  public filterTextUsage = filterTextUsage;
}
