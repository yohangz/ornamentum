import { Component } from '@angular/core';

import {
  filteringUsage,
  filterDebounceUsage,
  filterDebounceTimeUsage,
  filterTextUsage,
  demoSnippet
} from './dropdown-filtering.list';

@Component({
  selector: 'app-dropdown-filtering-component',
  templateUrl: './dropdown-filtering.component.html',
  styleUrls: ['./dropdown-filtering.component.scss']
})
export class DropdownFilteringComponent {
  public filteringUsage = filteringUsage;
  public filterDebounceUsage = filterDebounceUsage;
  public filterDebounceTimeUsage = filterDebounceTimeUsage;
  public filterTextUsage = filterTextUsage;
  public demoSnippet = demoSnippet;
}
