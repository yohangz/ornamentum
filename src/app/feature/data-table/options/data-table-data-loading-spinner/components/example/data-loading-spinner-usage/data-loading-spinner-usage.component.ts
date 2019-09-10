import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-data-loading-spinner-usage',
  templateUrl: './data-loading-spinner-usage.component.html'
})
export class DataLoadingSpinnerUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.fetchStaticData();
    }, 5000);
  }
}
