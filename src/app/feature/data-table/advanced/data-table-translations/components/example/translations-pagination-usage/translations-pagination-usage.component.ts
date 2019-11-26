import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-translations-pagination-usage',
  templateUrl: './translations-pagination-usage.component.html'
})
export class TranslationsPaginationUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    pagination: {
      limit: 'Sample Pagination Limit:',
      rangeKey: 'Sample Pagination Rage:',
      rangeSeparator: 'Sample of',
      nextTooltip: 'Sample Next',
      previousTooltip: 'Sample Previous',
      lastTooltip: 'Sample Last',
      firstTooltip: 'Sample First'
    }
  };

  public paginationItems: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.paginationItems = this.dataFetchService.fetchStaticData();
  }
}
