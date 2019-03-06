import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';
import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-items-usage',
  templateUrl: './items-usage.component.html'
})
export class ItemsUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    // This line of code is fetching 20 dummy data items collection from a local data service.
    // Replace this with your own data source.
    this.items = this.dataFetchService.fetchStaticData(0, 20);
  }
}
