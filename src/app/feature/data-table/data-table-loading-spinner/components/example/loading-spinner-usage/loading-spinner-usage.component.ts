import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-usage',
  templateUrl: './loading-spinner-usage.component.html'
})
export class LoadingSpinnerUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.fetchData();
    }, 3000);
  }
}
