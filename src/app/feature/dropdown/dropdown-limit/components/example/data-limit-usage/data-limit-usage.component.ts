import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-data-limit-usage',
  templateUrl: './data-limit-usage.component.html'
})
export class DataLimitUsageComponent {
  public items: ExampleData[];

  public translations: DropdownTranslations = {
    noDataMessage: 'No Data Available.'
  };

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
