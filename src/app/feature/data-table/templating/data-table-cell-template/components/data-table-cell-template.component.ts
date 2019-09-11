import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, cellTemplateUsage, cellTemplateUsageAvatar,  cellTemplateRowSpanUsage } from './data-table-cell-template.list';

@Component({
  selector: 'app-data-table-cell-template-component',
  templateUrl: './data-table-cell-template.component.html',
  styleUrls: ['./data-table-cell-template.component.scss']
})
export class DataTableCellTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public cellTemplateUsage = cellTemplateUsage;
  public cellTemplateUsageAvatar = cellTemplateUsageAvatar;
  public cellTemplateRowSpanUsage = cellTemplateRowSpanUsage;
}
