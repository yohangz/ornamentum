import { Component } from '@angular/core';

import { columnSortingUsage } from './data-table-column-sorting.list';

@Component({
  selector: 'app-data-table-column-sorting-component',
  templateUrl: './data-table-column-sorting.component.html',
  styleUrls: ['./data-table-column-sorting.component.scss']
})
export class DataTableColumnSortingComponent {
  public columnSortingUsage = columnSortingUsage;
}
