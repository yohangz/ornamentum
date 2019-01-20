import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-translations-select-placeholder-usage',
  templateUrl: './translations-select-placeholder-usage.component.html'
})
export class TranslationsSelectPlaceholderUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public dropdownTranslations: DropdownTranslations = {
    selectPlaceholder: 'This is select place holder'
  };
}
