import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-data-limit-usage',
  templateUrl: './data-limit-usage.component.html'
})
export class DataLimitUsageComponent {
  public options: ExampleData[];

  public translations: DropdownTranslations = {
    noDataMessage: 'No Data Available.'
  };

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
