import { Component } from '@angular/core';

import { rowExpandTemplateUsage } from './data-table-row-expand-template.list';

import { demoSnippet } from './data-table-row-expand-template';

@Component({
  selector: 'app-data-table-row-expand-template-component',
  templateUrl: './data-table-row-expand-template.component.html',
  styleUrls: ['./data-table-row-expand-template.component.scss']
})
export class DataTableRowExpandTemplateComponent {
  public rowExpandTemplateUsage = rowExpandTemplateUsage;

  public demoSnippet = demoSnippet;
}
