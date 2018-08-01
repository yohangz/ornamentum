import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-multi-row-selection-usage',
  templateUrl: './multi-row-selection-usage.component.html'
})
export class MultiRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
