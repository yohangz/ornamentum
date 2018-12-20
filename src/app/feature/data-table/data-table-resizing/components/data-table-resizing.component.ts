import { Component } from '@angular/core';

import { columnResizingUsage, demoSnippet } from './data-table-resizing.list';

@Component({
  selector: 'app-data-table-resizing-component',
  templateUrl: './data-table-resizing.component.html',
  styleUrls: ['./data-table-resizing.component.scss']
})
export class DataTableResizingComponent {
  public columnResizingUsage = columnResizingUsage;
  public demoSnippet = demoSnippet;
}
