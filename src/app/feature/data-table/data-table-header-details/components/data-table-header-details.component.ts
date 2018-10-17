import { Component } from '@angular/core';

import {
  demoSnippet,
  tableHeaderDetailsShowColumnSelectorUsage,
  tableHeaderDetailsShowRefreshBtnUsage,
  tableHeaderDetailsTitleUsage,
  tableHeaderDetailsUsage
} from './data-table-header-details.list';

@Component({
  selector: 'app-data-table-header-details-component',
  templateUrl: './data-table-header-details.component.html',
  styleUrls: ['./data-table-header-details.component.scss']
})
export class DataTableHeaderDetailsComponent {
  public tableHeaderDetailsUsage = tableHeaderDetailsUsage;
  public tableHeaderDetailsShowRefreshBtnUsage = tableHeaderDetailsShowRefreshBtnUsage;
  public tableHeaderDetailsTitleUsage = tableHeaderDetailsTitleUsage;
  public tableHeaderDetailsShowColumnSelectorUsage = tableHeaderDetailsShowColumnSelectorUsage;
  public demoSnippet = demoSnippet;
}
