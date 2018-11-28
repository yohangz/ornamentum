import { Component } from '@angular/core';

import { columnResizableUsage, demoSnippet } from './data-table-resizable.list';

@Component({
  selector: 'app-data-table-resizable-component',
  templateUrl: './data-table-resizable.component.html',
  styleUrls: ['./data-table-resizable.component.scss']
})
export class DataTableResizableComponent {
  public columnResizableUsage = columnResizableUsage;
  public demoSnippet = demoSnippet;
}
