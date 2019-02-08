import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-translations-filter-placeholder-usage',
  templateUrl: './translations-filter-placeholder-usage.component.html'
})
export class TranslationsFilterPlaceholderUsageComponent {
  public items: ExampleData[];

  public dropdownTranslations: DropdownTranslations = {
    filterPlaceholder: 'This is filter place holder'
  };

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
