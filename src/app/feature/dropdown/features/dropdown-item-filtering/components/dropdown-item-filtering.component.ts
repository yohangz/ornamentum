import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  itemFilteringUsage,
  filterDebounceUsage,
  filterDebounceTimeUsage,
  filterTextUsage
} from './dropdown-item-filtering.list';

@Component({
  selector: 'app-dropdown-item-filtering-component',
  templateUrl: './dropdown-item-filtering.component.html',
  styleUrls: ['./dropdown-item-filtering.component.scss']
})
export class DropdownItemFilteringComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemFilteringUsage = itemFilteringUsage;
  public filterDebounceUsage = filterDebounceUsage;
  public filterDebounceTimeUsage = filterDebounceTimeUsage;
  public filterTextUsage = filterTextUsage;
}
