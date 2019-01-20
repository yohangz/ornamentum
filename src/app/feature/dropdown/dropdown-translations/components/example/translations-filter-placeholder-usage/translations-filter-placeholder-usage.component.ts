import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

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
