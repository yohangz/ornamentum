import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  filteringUsage,
  filteringTextBoxUsage,
  filteringDropdownUsage
} from './data-table-filtering.list';

@Component({
  selector: 'app-data-table-filtering-component',
  templateUrl: './data-table-filtering.component.html',
  styleUrls: ['./data-table-filtering.component.scss']
})
export class DataTableFilteringComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public filteringUsage = filteringUsage;
  public filteringTextBoxUsage = filteringTextBoxUsage;
  public filteringDropdownUsage = filteringDropdownUsage;
}
