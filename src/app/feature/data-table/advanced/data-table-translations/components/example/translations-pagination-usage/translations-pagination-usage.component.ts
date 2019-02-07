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
    paginationLimit: 'This is the message for paginationLimit',
    paginationRange: 'This is the message for paginationRange'
  };

  public paginationItems: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.paginationItems = this.dataFetchService.fetchStaticData();
  }
}
