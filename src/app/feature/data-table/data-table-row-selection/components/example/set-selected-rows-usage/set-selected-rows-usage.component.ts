import { Component, OnInit } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-set-selected-rows-usage',
  templateUrl: './set-selected-rows-usage.component.html'
})
export class SetSelectedRowsUsageComponent implements OnInit {
  public items: ExampleData[];
  public selectedRows: any[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public ngOnInit() {
    this.selectedRows = [10, 20, 25];
  }
}
