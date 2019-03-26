import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  sortingUsage,
  multiColumnSortableUsage,
  sortFieldUsage,
  sortOrderUsage,
  serverSideSingleColumnSortableUsage,
  serverSideMultiColumnSortableUsage
} from './data-table-sorting.list';

@Component({
  selector: 'app-data-table-sorting-component',
  templateUrl: './data-table-sorting.component.html',
  styleUrls: ['./data-table-sorting.component.scss']
})
export class DataTableSortingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public sortingUsage = sortingUsage;
  public sortOrderUsage = sortOrderUsage;
  public sortFieldUsage = sortFieldUsage;
  public multiColumnSortableUsage = multiColumnSortableUsage;
  public serverSideSingleColumnSortableUsage = serverSideSingleColumnSortableUsage;
  public serverSideMultiColumnSortableUsage = serverSideMultiColumnSortableUsage;
}
