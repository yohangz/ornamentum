import { Component } from '@angular/core';

import { columnResizingUsage, demoSnippet } from './data-table-resizing.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-column-resizing-component',
  templateUrl: './data-table-column-resizing.component.html',
  styleUrls: ['./data-table-column-resizing.component.scss']
})
export class DataTableColumnResizingComponent {
  public FileType = FileType;

  public columnResizingUsage = columnResizingUsage;
  public demoSnippet = demoSnippet;
}
