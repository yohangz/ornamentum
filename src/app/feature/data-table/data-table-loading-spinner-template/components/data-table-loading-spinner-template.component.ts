import { Component } from '@angular/core';

import { demoSnippet, loadingSpinnerTemplateUsage } from './data-table-loading-spinner-template.list';

@Component({
  selector: 'app-data-table-loading-spinner-template-component',
  templateUrl: './data-table-loading-spinner-template.component.html',
  styleUrls: ['./data-table-loading-spinner-template.component.scss']
})
export class DataTableLoadingSpinnerTemplateComponent {
  public loadingSpinnerTemplateUsage = loadingSpinnerTemplateUsage;
  public demoSnippet = demoSnippet;
}
