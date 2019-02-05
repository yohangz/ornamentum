import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-loading-spinner-usage',
  templateUrl: './loading-spinner-usage.component.html'
})
export class LoadingSpinnerUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.fetchStaticData();
    }, 5000);
  }
}
