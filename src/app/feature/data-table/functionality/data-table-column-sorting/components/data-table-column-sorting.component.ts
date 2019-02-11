import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  columnSortingUsage,
  multiColumnSortableUsage,
  sortFieldUsage,
  sortOrderUsage,
  serverSideSingleColumnSortableUsage,
  serverSideMultiColumnSortableUsage
} from './data-table-column-sorting.list';

@Component({
  selector: 'app-data-table-column-sorting-component',
  templateUrl: './data-table-column-sorting.component.html',
  styleUrls: ['./data-table-column-sorting.component.scss']
})
export class DataTableColumnSortingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public columnSortingUsage = columnSortingUsage;
  public sortOrderUsage = sortOrderUsage;
  public sortFieldUsage = sortFieldUsage;
  public multiColumnSortableUsage = multiColumnSortableUsage;
  public serverSideSingleColumnSortableUsage = serverSideSingleColumnSortableUsage;
  public serverSideMultiColumnSortableUsage = serverSideMultiColumnSortableUsage;
}
