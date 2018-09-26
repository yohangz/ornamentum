import { Component } from '@angular/core';

import { basicUsage, demoSnippet } from './data-table-overview.list';

@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public basicUsage = basicUsage;
  public demoSnippet = demoSnippet;
}
