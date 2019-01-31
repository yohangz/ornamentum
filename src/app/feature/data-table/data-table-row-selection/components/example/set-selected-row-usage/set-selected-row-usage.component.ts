import { Component, OnInit } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-set-selected-row-usage',
  templateUrl: './set-selected-row-usage.component.html'
})
export class SetSelectedRowUsageComponent implements OnInit {
  public items: ExampleData[];
  public selectedRow: any;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public ngOnInit() {
    this.selectedRow = 10;
  }
}
