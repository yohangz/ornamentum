import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';
import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-column-selector-width-usage',
  templateUrl: './column-selector-width-usage.component.html'
})
export class ColumnSelectorWidthUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
