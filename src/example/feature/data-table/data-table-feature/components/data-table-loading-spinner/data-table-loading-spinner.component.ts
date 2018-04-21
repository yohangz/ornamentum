import { Component } from '@angular/core';

import { DataTableSelectMode } from '../../../../../../library/index';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-loading-spinner-component',
  templateUrl: './data-table-loading-spinner.component.html',
  styleUrls: ['./data-table-loading-spinner.component.scss']
})
export class DataTableLoadingSpinnerComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: any[];

  constructor() {
    setTimeout(() => {
      this.items = sampleData;
    }, 3000);
  }
}
