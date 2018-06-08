import { Component } from '@angular/core';

import {
  limitWithoutPaginationUsage,
  limitWithPaginationUsage,
  paginationWithoutLimitUsage,
  withoutLimitAndPaginationUsage
} from './data-table-limit.list';

@Component({
  selector: 'app-data-table-limit-component',
  templateUrl: './data-table-limit.component.html',
  styleUrls: ['./data-table-limit.component.scss']
})
export class DataTableLimitComponent {
  public limitWithPaginationUsage = limitWithPaginationUsage;
  public limitWithoutPaginationUsage = limitWithoutPaginationUsage;
  public paginationWithoutLimitUsage = paginationWithoutLimitUsage;
  public withoutLimitAndPaginationUsage = withoutLimitAndPaginationUsage;
}
