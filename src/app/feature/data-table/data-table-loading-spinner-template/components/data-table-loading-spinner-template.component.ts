import { Component } from '@angular/core';

import { demoSnippet, loadingSpinnerTemplateStylishUsage } from './data-table-loading-spinner-template.list';

@Component({
  selector: 'app-data-table-loading-spinner-template-component',
  templateUrl: './data-table-loading-spinner-template.component.html',
  styleUrls: ['./data-table-loading-spinner-template.component.scss']
})
export class DataTableLoadingSpinnerTemplateComponent {
  public loadingSpinnerTemplateStylishUsage = loadingSpinnerTemplateStylishUsage;
  public demoSnippet = demoSnippet;
}
