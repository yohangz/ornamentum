import { Component } from '@angular/core';

import { demoSnippet, filterDropdownUsage, filteringUsage, filterTextBoxUsage } from './data-table-filtering.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-filtering-component',
  templateUrl: './data-table-filtering.component.html',
  styleUrls: ['./data-table-filtering.component.scss']
})
export class DataTableFilteringComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public filterDropdownUsage = filterDropdownUsage;
  public filterTextBoxUsage = filterTextBoxUsage;
  public filteringUsage = filteringUsage;
}
