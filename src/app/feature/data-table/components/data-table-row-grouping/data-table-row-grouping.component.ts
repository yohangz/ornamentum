import { Component } from '@angular/core';

import { rowGroupingUsage } from './data-table-row-grouping.list';

@Component({
  selector: 'app-data-table-row-grouping-component',
  templateUrl: './data-table-row-grouping.component.html',
  styleUrls: ['./data-table-row-grouping.component.scss']
})
export class DataTableRowGroupingComponent {
  public rowGroupingUsage = rowGroupingUsage;
}
