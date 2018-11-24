import { Component, OnInit } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-selected-row-usage',
  templateUrl: './selected-row-usage.component.html'
})
export class SelectedRowUsageComponent implements OnInit {
  public items: ExampleData[];
  public selectedRow: any;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public ngOnInit() {
    this.selectedRow = 10;
  }
}
