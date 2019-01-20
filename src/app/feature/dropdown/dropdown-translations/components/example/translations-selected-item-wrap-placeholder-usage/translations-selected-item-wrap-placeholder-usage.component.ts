import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

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
