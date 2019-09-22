import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-lazy-loading-usage',
  templateUrl: './lazy-loading-usage.component.html'
})
export class LazyLoadingUsageComponent {
  public options: ExampleData[];

  public translations: DropdownTranslations = {
    noDataMessage: 'No Data Available.'
  };

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData(0, 100);
  }
}
