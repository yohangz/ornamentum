import { Component } from '@angular/core';

import { paginationUsage } from './data-table-pagination.list';

@Component({
  selector: 'app-data-table-pagination-component',
  templateUrl: './data-table-pagination.component.html',
  styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent {
  public paginationUsage = paginationUsage;
}
