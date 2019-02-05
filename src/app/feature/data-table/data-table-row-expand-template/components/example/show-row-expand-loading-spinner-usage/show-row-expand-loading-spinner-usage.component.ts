import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-show-row-expand-loading-spinner-usage',
  templateUrl: './show-row-expand-loading-spinner-usage.component.html'
})
export class ShowRowExpandLoadingSpinnerUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
