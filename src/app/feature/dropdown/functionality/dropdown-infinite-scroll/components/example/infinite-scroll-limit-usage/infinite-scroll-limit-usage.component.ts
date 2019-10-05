import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-infinite-scroll-limit-usage',
  templateUrl: './infinite-scroll-limit-usage.component.html'
})
export class InfiniteScrollLimitUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData(0, 100);
  }
}
