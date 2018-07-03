import { Component } from '@angular/core';

import { tableHeaderDetailsUsage } from './data-table-header-details.list';

@Component({
  selector: 'app-data-table-header-details-component',
  templateUrl: './data-table-header-details.component.html',
  styleUrls: ['./data-table-header-details.component.scss']
})
export class DataTableHeaderDetailsComponent {
  public tableHeaderDetailsUsage = tableHeaderDetailsUsage;
}
