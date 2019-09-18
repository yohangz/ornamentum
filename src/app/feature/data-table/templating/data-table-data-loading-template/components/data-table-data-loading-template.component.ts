import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, dataLoadingTemplateUsage } from './data-table-data-loading-template.list';

@Component({
  selector: 'app-data-table-data-loading-template-component',
  templateUrl: './data-table-data-loading-template.component.html',
  styleUrls: ['./data-table-data-loading-template.component.scss']
})
export class DataTableDataLoadingTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLoadingTemplateUsage = dataLoadingTemplateUsage;
}
