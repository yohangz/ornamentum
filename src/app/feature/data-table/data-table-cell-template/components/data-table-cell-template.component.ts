import { Component } from '@angular/core';

import { cellTemplateUsage, demoSnippet } from './data-table-cell-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-cell-template-component',
  templateUrl: './data-table-cell-template.component.html',
  styleUrls: ['./data-table-cell-template.component.scss']
})
export class DataTableCellTemplateComponent {
  public FileType = FileType;

  public cellTemplateUsage = cellTemplateUsage;
  public demoSnippet = demoSnippet;
}
