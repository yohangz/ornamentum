import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-lazy-loading-load-view-distance-usage',
  templateUrl: './lazy-loading-load-view-distance-usage.component.html'
})
export class LazyLoadingLoadViewDistanceUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData(0, 100);
  }
}
