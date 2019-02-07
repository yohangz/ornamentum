import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, dataLoadingSpinnerUsage } from './data-table-data-loading-spinner.list';

@Component({
  selector: 'app-data-table-data-loading-spinner-component',
  templateUrl: './data-table-data-loading-spinner.component.html',
  styleUrls: ['./data-table-data-loading-spinner.component.scss']
})
export class DataTableDataLoadingSpinnerComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLoadingSpinnerUsage = dataLoadingSpinnerUsage;
}
