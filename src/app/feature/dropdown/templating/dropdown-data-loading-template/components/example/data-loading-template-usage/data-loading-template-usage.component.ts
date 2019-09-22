import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-data-loading-template-usage',
  templateUrl: './data-loading-template-usage.component.html'
})
export class DataLoadingTemplateUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.options = this.dataFetchService.fetchStaticData();
    }, 5000);
  }
}
