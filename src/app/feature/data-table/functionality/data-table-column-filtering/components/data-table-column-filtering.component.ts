import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  columnFilteringUsage,
  columnFilteringTextBoxUsage,
  columnFilteringDropdownUsage,
  serverSideColumnFilteringDropdownUsage,
  serverSideColumnFilteringTextBoxUsage
} from './data-table-column-filtering.list';

@Component({
  selector: 'app-data-table-column-filtering-component',
  templateUrl: './data-table-column-filtering.component.html',
  styleUrls: ['./data-table-column-filtering.component.scss']
})
export class DataTableColumnFilteringComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public columnFilteringUsage = columnFilteringUsage;
  public columnFilteringTextBoxUsage = columnFilteringTextBoxUsage;
  public columnFilteringDropdownUsage = columnFilteringDropdownUsage;
  public serverSideColumnFilteringTextBoxUsage = serverSideColumnFilteringTextBoxUsage;
  public serverSideColumnFilteringDropdownUsage = serverSideColumnFilteringDropdownUsage;
}
