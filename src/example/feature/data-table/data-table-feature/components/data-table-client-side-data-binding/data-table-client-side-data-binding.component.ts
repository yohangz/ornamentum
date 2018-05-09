import { Component } from '@angular/core';

import { DataTableSelectMode } from '../../../../../../library/index';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-client-side-data-binding-component',
  templateUrl: './data-table-client-side-data-binding.component.html',
  styleUrls: ['./data-table-client-side-data-binding.component.scss']
})
export class DataTableClientSideDataBindingComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public data: any[];

  constructor() {
    this.data = sampleData;
  }
}
