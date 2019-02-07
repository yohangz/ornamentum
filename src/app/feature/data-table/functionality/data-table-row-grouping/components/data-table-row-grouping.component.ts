import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, rowGroupingUsage } from './data-table-row-grouping.list';

@Component({
  selector: 'app-data-table-row-grouping-component',
  templateUrl: './data-table-row-grouping.component.html',
  styleUrls: ['./data-table-row-grouping.component.scss']
})
export class DataTableRowGroupingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public rowGroupingUsage = rowGroupingUsage;
}
