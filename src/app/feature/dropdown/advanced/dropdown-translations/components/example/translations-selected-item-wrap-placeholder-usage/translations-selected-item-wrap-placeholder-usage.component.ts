import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-translations-selected-item-wrap-placeholder-usage',
  templateUrl: './translations-selected-item-wrap-placeholder-usage.component.html'
})
export class TranslationsSelectedItemWrapPlaceholderUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public dropdownTranslations: DropdownTranslations = {
    selectedItemWrapPlaceholder: 'Wrapped Items'
  };
}
