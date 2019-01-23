import { Component } from '@angular/core';

import { noRecordsTemplateUsage, demoSnippet } from './data-table-no-records-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-no-records-template-component',
  templateUrl: './data-table-no-records-template.component.html',
  styleUrls: ['./data-table-no-records-template.component.scss']
})
export class DataTableNoRecordsTemplateComponent {
  public FileType = FileType;

  public noRecordsTemplateUsage = noRecordsTemplateUsage;
  public demoSnippet = demoSnippet;
}
