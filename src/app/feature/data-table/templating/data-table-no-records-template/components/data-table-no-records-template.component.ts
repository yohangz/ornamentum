import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, noRecordsTemplateUsage } from './data-table-no-records-template.list';

@Component({
  selector: 'app-data-table-no-records-template-component',
  templateUrl: './data-table-no-records-template.component.html',
  styleUrls: ['./data-table-no-records-template.component.scss']
})
export class DataTableNoRecordsTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public noRecordsTemplateUsage = noRecordsTemplateUsage;
}
