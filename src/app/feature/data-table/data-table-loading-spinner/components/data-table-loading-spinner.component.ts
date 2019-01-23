import { Component } from '@angular/core';

import { demoSnippet, loadingSpinnerUsage } from './data-table-loading-spinner.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-loading-spinner-component',
  templateUrl: './data-table-loading-spinner.component.html',
  styleUrls: ['./data-table-loading-spinner.component.scss']
})
export class DataTableLoadingSpinnerComponent {
  public FileType = FileType;

  public loadingSpinnerUsage = loadingSpinnerUsage;
  public demoSnippet = demoSnippet;
}
