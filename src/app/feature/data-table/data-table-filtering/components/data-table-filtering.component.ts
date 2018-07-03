import { Component } from '@angular/core';

import { filterDropdownUsage, filterTextBoxUsage } from './data-table-filtering.list';

@Component({
  selector: 'app-data-table-filtering-component',
  templateUrl: './data-table-filtering.component.html',
  styleUrls: ['./data-table-filtering.component.scss']
})
export class DataTableFilteringComponent {
  public filterDropdownUsage = filterDropdownUsage;
  public filterTextBoxUsage = filterTextBoxUsage;
}
