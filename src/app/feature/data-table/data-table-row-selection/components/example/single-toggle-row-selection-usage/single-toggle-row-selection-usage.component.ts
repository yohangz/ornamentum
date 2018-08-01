import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-single-toggle-row-selection-usage',
  templateUrl: './single-toggle-row-selection-usage.component.html'
})
export class SingleToggleRowSelectionUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
