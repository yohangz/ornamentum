import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-translations-selected-option-wrap-placeholder-usage',
  templateUrl: './translations-selected-option-wrap-placeholder-usage.component.html'
})
export class TranslationsSelectedOptionWrapPlaceholderUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }

  public dropdownTranslations: DropdownTranslations = {
    selectedOptionWrapPlaceholder: 'Wrapped Options'
  };
}
