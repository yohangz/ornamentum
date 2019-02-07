import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, columnResizingUsage } from './data-table-resizing.list';

@Component({
  selector: 'app-data-table-column-resizing-component',
  templateUrl: './data-table-column-resizing.component.html',
  styleUrls: ['./data-table-column-resizing.component.scss']
})
export class DataTableColumnResizingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public columnResizingUsage = columnResizingUsage;
}
