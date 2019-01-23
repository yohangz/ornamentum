import { Component } from '@angular/core';

import { demoSnippet, rowGroupingUsage } from './data-table-row-grouping.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-row-grouping-component',
  templateUrl: './data-table-row-grouping.component.html',
  styleUrls: ['./data-table-row-grouping.component.scss']
})
export class DataTableRowGroupingComponent {
  public FileType = FileType;

  public rowGroupingUsage = rowGroupingUsage;
  public demoSnippet = demoSnippet;
}
