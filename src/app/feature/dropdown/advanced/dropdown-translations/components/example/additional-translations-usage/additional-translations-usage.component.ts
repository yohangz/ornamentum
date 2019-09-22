import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-additional-translations-usage',
  templateUrl: './additional-translations-usage.component.html'
})
export class AdditionalTranslationsUsageComponent {
  public options: ExampleData[];

  public dropdownTranslations: DropdownTranslations = {
    filterPlaceholder: 'This is filter place holder',
    selectedOptionWrapPlaceholder: 'Wrapped Options',
    selectPlaceholder: 'This is select place holder'
  };

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
