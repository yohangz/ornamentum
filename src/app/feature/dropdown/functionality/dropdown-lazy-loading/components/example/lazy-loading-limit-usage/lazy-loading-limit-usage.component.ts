import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-lazy-loading-limit-usage',
  templateUrl: './lazy-loading-limit-usage.component.html'
})
export class LazyLoadingLimitUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData(0, 100);
  }
}
