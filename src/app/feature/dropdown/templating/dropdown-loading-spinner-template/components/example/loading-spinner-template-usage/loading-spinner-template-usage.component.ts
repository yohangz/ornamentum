import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-loading-spinner-template-usage',
  templateUrl: './loading-spinner-template-usage.component.html'
})
export class LoadingSpinnerTemplateUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.fetchStaticData();
    }, 5000);
  }
}
