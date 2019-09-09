import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-column-binding-usage',
  templateUrl: './column-binding-usage.component.html',
  styles: ['.product-type { font-weight: bold }']
})
export class ColumnBindingUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
