import { Component } from '@angular/core';

import { demoSnippet, loadingSpinnerTemplateUsage } from './data-table-loading-spinner-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-loading-spinner-template-component',
  templateUrl: './data-table-loading-spinner-template.component.html',
  styleUrls: ['./data-table-loading-spinner-template.component.scss']
})
export class DataTableLoadingSpinnerTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public loadingSpinnerTemplateUsage = loadingSpinnerTemplateUsage;
}
