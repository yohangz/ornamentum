import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-multi-column-sortable-usage',
  templateUrl: './multi-column-sortable-usage.component.html'
})
export class MultiColumnSortableUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData(0, 20);
  }
}
