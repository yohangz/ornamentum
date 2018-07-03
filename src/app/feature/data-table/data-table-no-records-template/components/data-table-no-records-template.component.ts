import { Component } from '@angular/core';

import { noRecordsTemplateUsage } from './data-table-no-records-template.list';

import { demoSnippet } from './data-table-no-records-template';

@Component({
  selector: 'app-data-table-no-records-template-component',
  templateUrl: './data-table-no-records-template.component.html',
  styleUrls: ['./data-table-no-records-template.component.scss']
})
export class DataTableNoRecordsTemplateComponent {
  public noRecordsTemplateUsage = noRecordsTemplateUsage;

  public demoSnippet = demoSnippet;
}
