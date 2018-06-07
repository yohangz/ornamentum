import { Component } from '@angular/core';

import { loadingSpinnerUsage } from './data-table-loading-spinner.list';

@Component({
  selector: 'app-data-table-loading-spinner-component',
  templateUrl: './data-table-loading-spinner.component.html',
  styleUrls: ['./data-table-loading-spinner.component.scss']
})
export class DataTableLoadingSpinnerComponent {
  public loadingSpinnerUsage = loadingSpinnerUsage;
}
