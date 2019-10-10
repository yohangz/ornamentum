import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';


@Component({
  selector: 'app-selected-row-usage',
  templateUrl: './selected-row-usage.component.html'
})
export class SelectedRowUsageComponent {
  public items: ExampleData[];
  public selectedRow: any;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
    this.selectedRow = 10;
  }
}
