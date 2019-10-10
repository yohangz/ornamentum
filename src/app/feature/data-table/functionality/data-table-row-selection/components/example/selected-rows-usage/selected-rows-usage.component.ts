import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-selected-rows-usage',
  templateUrl: './selected-rows-usage.component.html'
})
export class SelectedRowsUsageComponent {
  public items: ExampleData[];
  public selectedRows: any[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
    this.selectedRows = [10, 20, 25];
  }
}
